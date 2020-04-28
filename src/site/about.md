---
layout: default
page_id: about
clone: <h2>Clone and deploy</h2><a class="deploy" href="https://app.netlify.com/start/deploy?repository=https://github.com/wshepworth/trackity"><img src="https://www.netlify.com/img/deploy/button.svg"></a>

---

## About

This site is an example of using [Eleventy's JavaScript Data Files](https://www.11ty.io/docs/data-js/) which simplify pulling content from remote data sources and making them available as  objects to be used globally across an Eleventy site.

- This page is pulling content from a read-only [Google Sheets feed](https://spreadsheets.google.com/feeds/list/1tzRuNEUBmpauOlIWZnR3in_LMvWCmxhRjvcF_ZxGtxs/od6/public/values?alt=json).
- The [code is available to inspect on GitHub]({{ pkg.repository.url}}). This would not be possible without the work of [Phil Hawksworth] who demo'd t(https://github.com/philhawksworth/example-read-from-sheets).
- You can also clone [the repo]({{ pkg.repository.url}}) and deploy your own version of the site to [Netlify](https://www.netlify.com) for free all in a couple of clicks by hitting the button below. That one down there. 👇