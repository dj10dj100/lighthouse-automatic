[![npm](https://img.shields.io/npm/dm/lighthouse-automatic.svg)]()
[![npm](https://img.shields.io/npm/dt/lighthouse-automatic.svg)]()
[![npm](https://img.shields.io/npm/v/lighthouse-automatic.svg)]()
[![Build Status](https://travis-ci.org/dj10dj100/lighthouse-automatic.svg?branch=master)](https://travis-ci.org/dj10dj100/lighthouse-automatic)

![alt Output][lighthouse]

[lighthouse]: carbon.png 'Lighthouse Configuration'

# 1. lighthouse-automatic

Google lighthouse as a service, automatically run lighthouse tasks in the background and profile your webpages

See `./example` for example project.

<!-- TOC -->

- [1. lighthouse-automatic](#1-lighthouse-automatic)
- [2. Setup](#2-setup)
- [3. Configuration](#3-configuration)
- [4. Run](#4-run)
- [5. Results](#5-results)
- [5. Options](#5-options)
- [6. Next release](#6-next-release)

<!-- /TOC -->

# 2. Setup

Lighthouse automatic can be found on npmjs.com.

To add to your project:

`yarn add lighthouse-automatic -D`

Or to install `lighthouse-automatic` as a cli app (global):

`yarn add global ligthouse-automatic`

# 3. Configuration

Configuration is handled by properties declared in your `package.json` file.

Note\* If using `lighthouse-automatic` globally the tool will look for a `package.json` in the current directory.

In your `package.json` you can configure the tests as follows:

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
    }
```

See [5. Options](#5-options) for more configuration.

# 4. Run

run the `lighthouse-automatic` command.

I suggest adding to npm scripts (see example project `scripts.start`) for ease of use.

# 5. Results

Head to `<your-project-directory>/lighthouse-reports` and the test results will be available to collect.

**sup**Currently results are only reported in .json format

# 5. Options

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

# 6. Next release

* Post/Curl results to external endpoint
* Run tests every X minutes
