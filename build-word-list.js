/**
 * Quick Node script that writes a list of the words covered by the plugin to a 
 * JSON file on disk.
 */

'use strict';

var plugin = require('./grawlix-racism');
var packageInfo = require('./package.json');
var fs = require('fs');
var _ = require('underscore');
// get words
var words = _.map(plugin.filters, function(filter) {
  return filter.word;
});
words.sort(function(a, b) {
  return (a < b) ? -1 : 1;
});
// get json
var obj = {
  words: words,
  'plugin-name': 'grawlix-racism',
  version: packageInfo.version
};
var json = JSON.stringify(obj, null, 4);
console.log(json);
console.log('word count: %d', words.length);
// don't count plurals
var noPlurals = _.filter(words, function(word) {
  return (word.search(/s$/i) === -1);
});
console.log('minus plurals: %d', noPlurals.length);
// save file
fs.writeFileSync('WORDS.json', json, { encoding: 'utf8' });
console.log('complete');
