const axios  = require('axios');
const seed   = require('../../../utils/save-seed.js');

// Once a Google sheet is "published to the web" we can access its JSON
// via a URL of this form. We just need to pass in the ID of the sheet
// which we can find in the URL of the document.
const sheetID = "1tzRuNEUBmpauOlIWZnR3in_LMvWCmxhRjvcF_ZxGtxs";
const metricsTabID = "2";
const googleWorksheetUrl = `https://spreadsheets.google.com/feeds/list/${sheetID}/${metricsTabID}/public/values?alt=json`;

module.exports = () => {
  return new Promise((resolve, reject) => {

    console.log(`Requesting data from ${googleWorksheetUrl}`);

    axios.get(googleWorksheetUrl)
      .then(response => {

        // massage the data from the Google Sheets API into
        // a shape that will more convenient for us in our SSG.
        // UPDATE this array if you update table headers
        var data = {
          "needHidden": []
        };

        // UPDATE these data items to match any updated table headers
        response.data.feed.entry.forEach(item => {
          data[item.gsx$needhidden.$t].push({
            "needHidden": item.gsx$needhidden.$t,
            "As a": item.gsx$asa.$t,
            "I need": item.gsx$ineed.$t,
            "So that": item.gsx$sothat.$t,
            "Last updated": item.gsx$lastupdated.$t
          })
        });

        // stash the data locally for developing without
        // needing to hit the API each time.
        seed(JSON.stringify(data), `${__dirname}/../dev/sheetNeeds.json`);

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