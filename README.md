grawlix-racism
==============

A plugin for [`grawlix`](https://www.npmjs.com/package/grawlix) that focuses on replacing racial slurs with nonsensical characters. This module adds filters for sixteen different racist terms and their variants.

**WARNING: THIS PACKAGE DEALS DIRECTLY WITH WORDS AND TERMS THAT MANY FIND OFFENSIVE, IMPOLITE, AND/OR DISTASTEFUL. ALL FILES IN THE REPOSITORY SHOULD BE CONSIDERED NSFW/NOT SAFE FOR WORK OR SCHOOL UNLESS STATED OTHERWISE. PLEASE READ THE SOURCE CODE AT YOUR OWN RISK!**

To see the full list of words handled by this plugin, [click here \(NSFW\)](https://github.com/tinwatchman/grawlix-racism/blob/master/WORDS.json). To learn more, see the [main `grawlix` repository](https://github.com/tinwatchman/grawlix).

## Installation

This plugin requires `grawlix`.

```sh
npm install grawlix-racism --save
```

## Usage

```javascript
var grawlix = require('grawlix');
grawlix.setDefaults({
  plugins: [
    {
      plugin: require('grawlix-racism')
    }
  ]
  // other options...
});
// or alternately:
grawlix.loadPlugin('grawlix-racism');

// replace offensive terms with grawlixes
var censored = grawlix(text);
```

## Testing

```sh
npm test
```

