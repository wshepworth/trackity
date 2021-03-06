const axios  = require('axios');
const seed   = require('../../../utils/save-seed.js');

// Once a Google sheet is "published to the web" we can access its JSON
// via a URL of this form. We just need to pass in the ID of the sheet
// which we can find in the URL of the document.
const sheetID = "1tzRuNEUBmpauOlIWZnR3in_LMvWCmxhRjvcF_ZxGtxs";
const googleSheetUrl = `https://spreadsheets.google.com/feeds/list/${sheetID}/od6/public/values?alt=json`;

module.exports = () => {
  return new Promise((resolve, reject) => {

    console.log(`Requesting data from ${googleSheetUrl}`);

    axios.get(googleSheetUrl)
      .then(response => {

        // massage the data from the Google Sheets API into
        // a shape that will more convenient for us in our SSG.
        // UPDATE this array if you update the first column with any new data item
        var data = {
          "insightHidden": []
        };

        // UPDATE these data items to match any updated table headers
        response.data.feed.entry.forEach(item => {
          data[item.gsx$insighthidden.$t].push({
            "insightHidden": item.gsx$insighthidden.$t,
            "Journey": item.gsx$journey.$t,
            "Insight": item.gsx$insight.$t,
            "Sprint": item.gsx$sprint.$t,
            "Confidence": item.gsx$confidence.$t,
            "Last updated": item.gsx$lastupdated.$t,
            "Updated": item.updated.$t
          })
        });

        // stash the data locally for developing without
        // needing to hit the API each time.
        seed(JSON.stringify(data), `${__dirname}/../dev/sheetInsights.json`);

        // resolve the promise and return the data
        resolve(data);

      })

      // uh-oh. Handle any errrors we might encounter
      .catch(error => {
        console.log('Error:', error);
        reject(error);
      });
  })

  
}