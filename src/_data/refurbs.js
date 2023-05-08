const groq = require('groq')
const { toHTML } = require('@portabletext/to-html')

const urlFor = require('../utils/imageUrl')
const client = require('../utils/sanityClient')
const serializers = require('../utils/serializers')

const generateDoc = async (doc) => {
  try {
  return {
    ...doc,
    images: doc.images.map(image => ({
      url: urlFor(image.ref).width(1000).url(),
      alt: image.alt
    })),
    description: doc.description ? toHTML(doc.description, { components: serializers }) : '', 
  }
  } catch (err) {
    // eslint-disable-next-line
    console.error(err)
  }
}

const getRefurbs = async () => {
  const filter = groq`*[_type == "refurbBike"] && bike.available == true`
  const projection = groq`{
    "id": _id,
    "name": bike.name,
    "slug": bike.slug.current,
    price,
    altPrice,
    "images": bike.images[] {
      "ref": asset._ref,
      alt
    }
  }`

  const order = ''
  const query = [filter, projection, order].join(' ')
  const docs = await client.fetch(query).catch((err) => {
    // eslint-disable-next-line
    console.error(err)
  })
  const prepareDocs = await Promise.all(
    docs.map(async (doc) => {
      const refurb = await generateDoc(doc)
      return refurb
    })
  )
  
  return prepareDocs
}

module.exports = getRefurbs
