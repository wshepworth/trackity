# trackity
 
[![Netlify Status](https://api.netlify.com/api/v1/badges/acfc2936-e6da-4242-88a5-ef27b3765059/deploy-status)](https://app.netlify.com/sites/trackity/deploys)

# Read from Google Sheets API with Eleventy

> Example site: https://trackity.netlify.com/

The site is pulling content from a read-only Google Sheets feed at build time.

## Instructions

To get your own instance of this 11ty example project cloned and deploying to Netlify very quickly, just click the button below and follow the instructions.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/wshepworth/trackity)


## What happens when I click that button?

Here's what it will do...

1. Netlify will clone the git repository of this project into your Github account. It will be asking for permission to add the repo for you.
2. It'll create a new site for you in Netlify, and configure it to use your shiny new repo. Right away you'll be able to deploy changes simply by pushing changes to your repo.

## Changing the data source

There are a couple of steps required to expose the content from your Google Sheet as a JSON API.

1. Create a google sheet and format it with column names in the first row. The JSON feed generated will use these column names.
2. You'll use the unique ID of the sheet from its URL to address it later.
    - For example: `https://docs.google.com/spreadsheets/d/1tzRuNEUBmpauOlIWZnR3in_LMvWCmxhRjvcF_ZxGtxs/edit#gid=0`
    - Where: `https://docs.google.com/spreadsheets/d/{SHEET_ID}/edit#gid=0`
3. After creating you sheet, you need to publish it to the web. Do this from the **File menu in Google Sheets. Select the option to publish the sheet as a web page.
4. Check that you can now access the JSON feed of the sheet, using your Sheet ID in a URL using this convention:
   - `https://spreadsheets.google.com/feeds/list/{SHEET_ID}/od6/public/values?alt=json`;
5. Specify the Sheet ID to be used when constructing the request URL in [`/src/site/_data/prod/sheet.js`](/src/site/_data/prod/sheet.js#L8)

## Changing the sheet format

Here's what you'll need to do should you need to chop & change the sheet template to meet your needs...

### Change table headers

1. Change the header in Sheets to whatever you want
2. In the corresponding JS file, change. There are inline comments to help you with this

### Delete table headers

### Add table headers

The table headers in Google Sheets correspond to data items contained in the JS files. If you want to change any headers,navigate to the JS files with the corresponding name and update the data array. There are inline comments contained within the JS files to guide you doing this.

## Local development

### Prerequisites

- [Node and NPM](https://nodejs.org/)


## Running locally

```bash
# install the dependencies
npm install

# External data sources can be stashed locally for API-less dev
npm run seed

# It will then be available locally for building with:
npm run start
```