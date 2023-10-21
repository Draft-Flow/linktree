require('dotenv').config()
const eBayApi = require('ebay-api');
const endOfToday = require('date-fns/endOfToday')
const sub = require('date-fns/sub')
const formatISO = require('date-fns/formatISO')

const eBay = new eBayApi({
  appId: process.env.EBAY_APP_ID,
  certId: process.env.EBAY_CERT_ID,
  sandbox: false,
  siteId: eBayApi.SiteId.EBAY_GB,
  devId: process.env.EBAY_DEV_ID,
  authToken: process.env.EBAY_AUTH_TOKEN
});

module.exports = async () => {
  try {
  const items = await eBay.trading.GetSellerList({
    startTimeFrom: formatISO(sub(new Date(), { months: 3 })),
    startTimeTo: formatISO(endOfToday()),
    granularityLevel: 'Medium',
    userId: 'draftandflow',
    Pagination: {
      EntriesPerPage: 20,
      PageNumber: 1
    }
  }, {sign: true});

  const { ItemArray: itemArray } = items

  if (!itemArray.length) {
    return null

  }

  return itemArray.Item.map( (item) => {
    return {
      name: item.Title,
      url: item.ListingDetails.ViewItemURL,
      price: item.SellingStatus.CurrentPrice.value,
      image: item.PictureDetails.PictureURL[0],
    }
  })
} catch (error) {
  console.error(error)
}

}
