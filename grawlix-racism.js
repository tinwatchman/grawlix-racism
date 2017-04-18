/**
 * grawlix-racism
 * A plugin focused on replacing racial slurs with nonsense characters.
 * 
 * WARNING: THIS PLUGIN DEALS DIRECTLY WITH TERMS THAT MANY FIND OFFENSIVE, 
 * IMPOLITE, AND/OR DISTASTEFUL. AS SUCH, ALL SOURCE CODE SHOULD BE CONSIDERED 
 * NSFW/NOT SAFE FOR WORK UNLESS OTHERWISE STATED. PLEASE READ THESE FILES AT 
 * YOUR OWN RISK!
 *
 * @version 1.0.1
 */

'use strict';

const GrawlixPlugin = require('grawlix').GrawlixPlugin;
const FilterTemplate = require('grawlix').FilterTemplate;

const _ = require('underscore');

/**
 * Default options
 * @type {Object}
 */
const DEFAULTS = {
  useDistinctStyle: 'nazi'
};

/**
 * Plugin filters
 * @type {Array}
 */
var FILTERS = [
  /* N-word and variants */
  {
    word: 'niggas',
    pattern: /n+[i1]+gg+[a@]+[s\$z]+/i,
    priority: 0,
    expandable: true
  },
  {
    word: 'niggers',
    pattern: /n+[i1]+gg+e+r+[s\$z]+/i,
    priority: 0,
    expandable: true
  },
  {
    word: 'nigga',
    pattern: /n+[\W023456789_]{0,42}[i1]+[\W023456789_]{0,42}g[\W\d_]{0,42}g+[\W\d_]{0,42}[a@]+(?!rd)/i,
    priority: 1,
    expandable: true
  },
  {
    word: 'nigger',
    pattern: /(\b|^|[^s])n+[\W02-9_]{0,42}[i1]+[\W02-9_]{0,42}g[\W\d_]{0,42}g+[\W0-24-9_]{0,42}[e3]+[\W0-24-9_]{0,42}r+/i,
    priority: 1,
    expandable: true,
    template: FilterTemplate.PRE
  },
  {
    word: 'migger',
    pattern: /m+[i1]+gg+[e3]+r+/i,
    priority: 1,
    expandable: true
  },
  {
    word: 'yigger',
    pattern: /y+[i1]+gg+[e3]+r+/i,
    priority: 1,
    expandable: true
  },
  /* 'darkie' */
  {
    word: 'darkies',
    pattern: /d+[a@]+r+k+[i1]+[e3]+s+/i,
    priority: 0,
    expandable: true
  },
  {
    word: 'darkie',
    pattern: /d+[\W\d_]{0,42}[a@]+[\W\d_]{0,42}r+[\W\d_]{0,42}k+[\W02-9_]{0,42}[i1]+[\W024-9_]{0,42}[e3]+/i,
    priority: 1,
    expandable: true
  },
  /* shvatsa */
  {
    word: 'shvatsas',
    pattern: /[s$z]+h+v+[a@]+t+[s$z]+[a@]+[s$z]+/i,
    priority: 0,
    expandable: true
  },
  {
    word: 'shvatsa',
    pattern: /[s$z]+h+v+[a@]+t+[s$z]+[a@]+/i,
    priority: 1,
    expandable: true
  },
  /* spic */
  {
    word: 'spics',
    pattern: /(\b|^)[s$]+p+[i1]+c+k{0,32}[s$]+/i,
    priority: 0,
    expandable: true,
    template: FilterTemplate.PRE
  },
  {
    word: 'spic',
    pattern: /(\b|^)[s$]+[\W\d_]{0,42}p+[\W02-9_]{0,42}[i1]+[\W02-9_]{0,42}c+(\b|$)/i,
    priority: 1,
    expandable: true,
    template: FilterTemplate.BETWEEN
  },
  /* wetback */
  {
    word: 'wetbacks',
    pattern: /w+[e3]+t+b+[a@]+c+k+[s$z]+/i,
    priority: 0,
    expandable: true
  },
  {
    word: 'wetback',
    pattern: /w+[e3]+t+b+[a@]+c+k+/i,
    priority: 1,
    expandable: true
  },
  /* kike */
  {
    word: 'kikes',
    pattern: /k+[i1]+k+[e3]+[s$z]+/i,
    priority: 0,
    expandable: true
  },
  {
    word: 'kike',
    pattern: /k+[\W02-9_]{0,42}[i1]+[\W02-9_]{0,42}k+[\W0124-9_]{0,42}[e3]+(\b|$)/i,
    priority: 1,
    expandable: true,
    template: FilterTemplate.POST
  },
  /* gook */
  {
    word: 'gooks',
    pattern: /g+[\W1-9_]{0,42}[o0][\W1-9_]{0,42}[o0]+[\W1-9_]{0,42}k+[\W\d_]{0,42}[s$]+/i,
    priority: 0,
    expandable: true
  },
  {
    word: 'gook',
    pattern: /(\b|^)g+[\W1-9_]{0,42}[o0][\W1-9_]{0,42}[o0]+[\W1-9_]{0,42}k+(?!y)/i,
    priority: 1,
    expandable: true,
    template: FilterTemplate.PRE
  },
  /* raghead */
  {
    word: 'ragheads',
    pattern: /r+[a@]+g+[\W\d_]{0,42}h+[e3]+[a@]+d+[s$]+/i,
    priority: 0,
    expandable: true
  },
  {
    word: 'raghead',
    pattern: /r+[\W\d_]{0,42}[a@]+[\W\d_]{0,42}g+[\W\d_]{0,42}h+[\W0-24-9_]{0,42}[e3]+[\W0-24-9_]{0,42}[a@]+[\W\d_]{0,42}d+/i,
    priority: 1,
    expandable: true
  },
  /* towelhead */
  {
    word: 'towelheads',
    pattern: /t+[o0]+w+[e3]+[l1]+[\W02-9_]{0,42}h+[e3]+[a@]+d+[s$]+/i,
    priority: 0,
    expandable: true
  },
  {
    word: 'towelhead',
    pattern: /t+[\W1-9_]{0,42}[o0]+[\W1-9_]{0,42}w+[\W0-24-9_]{0,42}[e3]+[\W024-9_]{0,42}[l1]+[\W02-9_]{0,42}h+[\W0-24-9_]{0,42}[e3]+[\W0-24-9_]{0,42}[a@]+[\W\d_]{0,42}d+/i,
    priority: 1,
    expandable: true
  },
  /* injun */
  {
    word: 'injuns',
    pattern: /[i1]+n+j+u+n+[s$]+/i,
    priority: 0,
    expandable: true
  },
  {
    word: 'injun',
    pattern: /[i1]+[\W02-9_]{0,42}n+[\W\d_]{0,42}j+[\W\d_]{0,42}u+[\W\d_]{0,42}n+(\b|$)/i,
    priority: 1,
    expandable: true,
    template: FilterTemplate.POST
  },
  /* squaw */
  {
    word: 'squaws',
    pattern: /(\b|^)[s$]+q+u+[a@]+w+s+/i,
    priority: 0,
    expandable: true,
    template: FilterTemplate.PRE
  },
  {
    word: 'squaw',
    pattern: /(\b|^)[s$]+q+u+[a@]+w+(\b|$)/i,
    priority: 1,
    expandable: true,
    template: FilterTemplate.BETWEEN
  },
  /* wog, golliwog and variants */
  {
    word: 'golliwogs',
    pattern: /g[o0][l1][l1][i1y]w[o0]g+[s$]/i,
    priority: 0,
    expandable: true
  },
  {
    word: 'golliwog',
    pattern: /g[o0][l1][l1][i1y]w[o0]g+/i,
    priority: 1,
    expandable: true
  },
  {
    word: 'wogs',
    pattern: /w+[\W1-9_]{0,42}[o0]+[\W1-9_]{0,42}g+[\W\d_]{0,42}[s$]+/i,
    priority: 1,
    expandable: true
  },
  {
    word: 'wog',
    pattern: /(\b|^)w+[\W1-9_]{0,42}[o0]+[\W1-9_]{0,42}g+(\b|$)/i,
    priority: 2,
    expandable: true,
    template: FilterTemplate.BETWEEN
  },
  /* kaffir (South African slur) and variants */
  {
    word: 'kaffirs',
    pattern: /[ck][a@]ff[ie3]r[s$z]/i,
    priority: 0
  },
  {
    word: 'caffres',
    pattern: /[ck][a@]ffr[e3][s$z]/i,
    priority: 0
  },
  {
    word: 'caffre',
    pattern: /[ck][\W\d_]{0,42}[a@][\W\d_]{0,42}f[\W\d_]{0,42}f[\W\d_]{0,42}r[\W0-24-9_]{0,42}[e3]/i,
    priority: 1,
    expandable: true
  },
  {
    word: 'kaffir',
    pattern: /[ck]+[\W\d_]{0,42}[a@]+[\W\d_]{0,42}(?:f[\W024-9_]{0,42})+[i1e3]+[\W024-9_]{0,42}r+/i,
    priority: 2,
    expandable: true
  },
  /* shitskin */
  {
    word: 'shitskins',
    pattern: /[s$]h[i1]t[s$]k[i1]n[s$]/i,
    priority: 0
  },
  {
    word: 'shitskin',
    pattern: /[s$]h[i1]t[s$]k[i1]n/i,
    priority: 1
  },
  // adjust priority of default 'shit' filter to avoid conflicts
  {
    word: 'shit',
    minPriority: 2
  },
  /* latrino */
  {
    word: 'latrinos',
    pattern: /[l1][a@]tr[i1]n[o0][s$z]/i,
    priority: 0
  },
  {
    word: 'latrino',
    pattern: /[l1][a@]tr[i1]n[o0]/i,
    priority: 1
  },
  /* chinkerbell */
  {
    word: 'chinkerbell',
    pattern: /ch[i1]nk[e3]rb[e3][l1][l1]+/i,
    priority: 0,
    expandable: true
  },
  /* shvooga */
  {
    word: 'shvoogas',
    pattern: /[s$]hv[o0][o0]g[a@][s$]/i,
    priority: 0
  },
  {
    word: 'shvooga',
    pattern: /[s$]hv[o0][o0]g[a@]/i,
    priority: 1
  },
  /* negress */
  {
    word: 'negress',
    pattern: /n[e3]gr[e3][s$z][s$z]+/i,
    priority: 0,
    expandable: true
  },
  /* sambo */
  {
    word: 'sambos',
    pattern: /[s$][a@]mb[o0][e3]*[s$]/i,
    priority: 0
  },
  {
    word: 'sambo',
    pattern: /[s$][\W\d_]{0,42}[a@][\W\d_]{0,42}m[\W\d_]{0,42}b[\W1-9_]{0,42}[o0]/i,
    priority: 1
  }
];

/**
 * Plugin styles
 * @type {Array}
 */
const STYLES = [
  {
    name: 'nazi',
    char: '卐'
  }
];

module.exports = new GrawlixPlugin({
  name: 'grawlix-racism',
  filters: FILTERS,
  styles: STYLES,
  init: function(options) {
    _.defaults(options, DEFAULTS);
    if (options.useDistinctStyle !== false && 
        !_.isEmpty(options.useDistinctStyle)) {
      // set override style for racism filters
      _.each(this.filters, function(filter) {
        if (_.has(filter, 'pattern')) {
          filter.style = options.useDistinctStyle;
        }
      });
    } else {
      // unset override styles
      _.each(this.filters, function(filter) {
        if (_.has(filter, 'style')) {
          delete filter.style;
        }
      });
    }
  }
});
