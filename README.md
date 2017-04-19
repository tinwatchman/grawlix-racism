grawlix-racism
==============

[![Build Status](https://travis-ci.org/tinwatchman/grawlix-racism.svg?branch=master)](https://travis-ci.org/tinwatchman/grawlix-racism)
[![Dependency Status](https://gemnasium.com/tinwatchman/grawlix-racism.svg)](https://gemnasium.com/tinwatchman/grawlix-racism)
[![Coverage Status](https://coveralls.io/repos/github/tinwatchman/grawlix-racism/badge.svg?branch=master)](https://coveralls.io/github/tinwatchman/grawlix-racism?branch=master)

A plugin for [`grawlix`](https://www.npmjs.com/package/grawlix) that focuses on replacing racial and ethnic slurs with nonsensical characters. This module adds filters for twenty-four different racist terms and their variants.

**WARNING: THIS PACKAGE DEALS DIRECTLY WITH WORDS AND TERMS THAT MANY FIND OFFENSIVE, IMPOLITE, AND/OR DISTASTEFUL. ALL FILES IN THE REPOSITORY SHOULD BE CONSIDERED NSFW/NOT SAFE FOR WORK OR SCHOOL UNLESS STATED OTHERWISE. PLEASE READ THE SOURCE CODE AT YOUR OWN RISK!**

To see the full list of words handled by this plugin, [click here \(NSFW\)](https://github.com/tinwatchman/grawlix-racism/blob/master/WORDS.json). To learn more about the `grawlix` package, visit its [repository](https://github.com/tinwatchman/grawlix).

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
      plugin: require('grawlix-racism'),
      options: {
        style: 'nazi'
      }
    }
  ]
  // other options...
});
// or alternately:
grawlix.loadPlugin('grawlix-racism', {
  style: 'nazi'
});
```

## Options

### style

Type: `String`<br>
Default: `'nazi'`

Sets the distinct style of grawlix used to replace racial and ethnic slurs. By default, any slurs found by this plugin will be replaced using its own ['nazi' style](#style_nazi), as opposed to whatever main style has been set in the `grawlix` options. This is intended to specifically highlight and call out filtered content that uses racially-insensitive language.

To turn this feature off, set this property to `false` in the plugin options:

```javascript
grawlix.setDefaults({
  plugins: [
    {
      plugin: require('grawlix-racism'),
      options: {
        style: false
      }
    }
  ]
});
// or:
grawlix.loadPlugin('grawlix-racism', {
  style: false
});
```

You can also use this option to specify a distinct style other than `'nazi'`:

```javascript
grawlix.setDefaults({
  style: 'redacted',
  plugins: [
    {
      plugin: require('grawlix-racism'),
      options: {
        style: 'asterix'
      }
    }
  ]
});
// result of these settings: slurs will be replaced by '*' characters,
// while other obscenities will be replaced by '█'s.
```

## Filters

[Click here \(NSFW\)](https://github.com/tinwatchman/grawlix-racism/blob/master/WORDS.json) to see a full list of the racial and ethnic slurs targeted by this plugin.

## Styles

<a name="style_nazi"></a>

### Nazi

Single-Character Grawlix Style<br>
Name String: `'nazi'`<br>
Character: `'卐'`

Replaces found words with swastika (`卐`) symbols. Useful for pointing out or calling attention to hate speech.

```javascript
grawlix.setDefaults({
  style: 'nazi',
  filters: [
    {
      word: 'racialslur',
      pattern: /racialslur/i
    }
  ]
});

grawlix('some kind of racialslur');
// output: 'some kind of 卐卐卐卐卐卐卐卐卐卐'
```

## Testing

```sh
npm test
```

## Release History

- 1.0.2
  * Shortened `useDistinctStyle` option to `style`

## Credits and Licensing

Created by [Jon Stout](http://www.jonstout.net). Licensed under [the MIT license](http://opensource.org/licenses/MIT).
