[![npm](https://img.shields.io/npm/dm/lighthouse-automatic.svg)]()
[![npm](https://img.shields.io/npm/dt/lighthouse-automatic.svg)]()
[![npm](https://img.shields.io/npm/v/lighthouse-automatic.svg)]()
[![Build Status](https://travis-ci.org/dj10dj100/lighthouse-automatic.svg?branch=master)](https://travis-ci.org/dj10dj100/lighthouse-automatic)

![alt Output][lighthouse]

[lighthouse]: carbon.png 'Lighthouse Configuration'

# 1. lighthouse-automatic

Google lighthouse as a service, automatically run lighthouse tasks in the background and profile your webpages

<!-- TOC -->

- [1. lighthouse-automatic](#1-lighthouse-automatic)
- [2. Setup](#2-setup)
- [3. Configuration](#3-configuration)
- [4. Options](#4-options)
- [5. Run Lighthouse automatic](#5-run-lighthouse-automatic)
- [6. Next release](#6-next-release)

<!-- /TOC -->

# 2. Setup

Lighthouse automatic can be found on npmjs.com, to install:
`yarn add lighthouse-automatic -D`

# 3. Configuration

Configuration for the application is handled by properties in `package.json`:

`package.json` example:

```json
  "lighthouse-automatic": {
        "urls": [
            {
                "url": "https://www.webpage.com/",
                "pageName": "webpage-Homepage"
            },
            {
                "url": "https://www.webpage.com/search?q=**",
                "pageName": "webpage-Search"
            },
            {
                "url": "https://www.webpage.com/login",
                "pageName": "webpage-login"
            }
        ],
        "log": false
    },
```

# 4. Options

* `"urls"`: [Array] of {URL} objects, used to describe which urls to run lighthouse against;

- `url`: {Object} - small object for each lighthouse automatic test destination.

```json
    {
        "url": "https://www.webpage.com/",
        "pageName": "webpage-Homepage"
    },
```

<!-- * `"runOnce"`: boolean - decide whether tests should run -

"minutes": "5",
"endpoint": "", -->

* `"log"`: boolean - decide whether you want logs to be shown during build;

# 5. Run Lighthouse automatic

* Install
* Setup package.json
* run `lighthouse-automatic` command
* Collect results from `./lighthouse-reports`

**sup** Currently results are only reported in .json format

# 6. Next release

* Post/Curl results to external endpoint
* Run tests every X minutes
