---
title: About
layout: default
page_id: about
---

## About this example 

This site is an example of using [Eleventy's JavaScript Data Files](https://www.11ty.io/docs/data-js/) which simplify pulling content from remote data sources and making them available as  objects to be used globally across an Eleventy site.

- This page is pulling content from a read-only [Google Sheets feed](https://spreadsheets.google.com/feeds/list/1tzRuNEUBmpauOlIWZnR3in_LMvWCmxhRjvcF_ZxGtxs/od6/public/values?alt=json).
- The [code is available to inspect on GitHub]({{ pkg.repository.url}}). This would not be possible without the work of [Phil Hawksworth](https://github.com/philhawksworth/example-read-from-sheets).
- You can also clone [the repo]({{ pkg.repository.url}}) and deploy your own version of the site to [Netlify](https://www.netlify.com) for free all in a couple of clicks by hitting the button below. That one down there. 👇
 
## Clone and deploy!

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/wshepworth/trackity)

## Content from an external data source 

The table showing research insights was sourced from [a Google Sheet](https://docs.google.com/spreadsheets/d/1tzRuNEUBmpauOlIWZnR3in_LMvWCmxhRjvcF_ZxGtxs/edit?usp=sharing) as [JSON](https://spreadsheets.google.com/feeds/list/1tzRuNEUBmpauOlIWZnR3in_LMvWCmxhRjvcF_ZxGtxs/od6/public/values?alt=json) at site build time.
