'use strict';

var grawlix = require('grawlix');
var plugin = require('../grawlix-racism');
const _ = require('underscore');

describe('grawlix-racism', function() {

  describe('#nazi style', function() {
    it('should exist', function() {
      var naziStyle = _.findWhere(plugin.styles, { name: 'nazi' });
      expect(naziStyle).toBeDefined();
    });
  });

  describe('#filters', function() {

    beforeAll(function() {
      grawlix.setDefaults({
        allowed: [ 'shit' ]
      });
      grawlix.loadPlugin(plugin);
    });

    describe('n-word and related', function() {
      it('should match nigger', function() {
        expect(grawlix.isObscene('nigger')).toBe(true);
      });
      it('should match n1gg3r', function() {
        expect(grawlix.isObscene('n1gg3r')).toBe(true);
      });
      it('should match n i g g e r', function() {
        expect(grawlix.isObscene('n i g g e r')).toBe(true);
      });
      it('should match nnnnniiiiiigggggggeeeerrrr', function() {
        expect(grawlix.isObscene('nnnnniiiiiigggggggeeeerrrr')).toBe(true);
      });
      it('should match nigga', function() {
        expect(grawlix.isObscene('nigga')).toBe(true);
      });
      it('should match n i g g a', function() {
        expect(grawlix.isObscene('n i g g a')).toBe(true);
      });
      it('should match n1gg@', function() {
        expect(grawlix.isObscene('n1gg@')).toBe(true);
      });
      it('should match migger', function() {
        expect(grawlix.isObscene('migger')).toBe(true);
      });
      it('should match yigger', function() {
        expect(grawlix.isObscene('yigger')).toBe(true);
      });
    });

    describe('darkie', function() {
      it('should match darkie', function() {
        expect(grawlix.isObscene('darkie')).toBe(true);
      });
      it('should match d@rk13', function() {
        expect(grawlix.isObscene('d@rk13')).toBe(true);
      });
      it('should match d a r k i e', function() {
        expect(grawlix.isObscene('d a r k i e')).toBe(true);
      });
      it('should match darkies', function() {
        expect(grawlix.isObscene('darkies')).toBe(true);
      });
      it('should match d8a8r8k8i8e', function() {
        expect(grawlix.isObscene('d0a0r0k0i0e')).toBe(true);
      });
      it('should match d-a-r-k-i-e', function() {
        expect(grawlix.isObscene('d-a-r-k-i-e')).toBe(true);
      });
    });

    describe('shvatsa', function() {
      it('should match shvatsas', function() {
        expect(grawlix.isObscene('shvatsas')).toBe(true);
      });
      it('should match $hv@tz@$', function() {
        expect(grawlix.isObscene('$hv@tz@$')).toBe(true);
      });
      it('should match shvatsa', function() {
        expect(grawlix.isObscene('shvatsa')).toBe(true);
      });
    });

    describe('spic', function() {
      it('should match spics', function() {
        expect(grawlix.isObscene('spics')).toBe(true);
      });
      it('should match spicks', function() {
        expect(grawlix.isObscene('spicks')).toBe(true);
      });
      it('should match spic', function() {
        expect(grawlix.isObscene('spic')).toBe(true);
      });
      it('should match $p1c', function() {
        expect(grawlix.isObscene('$p1c')).toBe(true);
      });
      it('should match s p i c', function() {
        expect(grawlix.isObscene('s p i c')).toBe(true);
      });
      it('should match ssssssppppppiiiiiiccccc', function() {
        expect(grawlix.isObscene('ssssssppppppiiiiiiccccc')).toBe(true);
      });
    });

    describe('wetback', function() {
      it('should match wetbacks', function() {
        expect(grawlix.isObscene('wetbacks')).toBe(true);
      });
      it('should match w3tb@ck$', function() {
        expect(grawlix.isObscene('w3tb@ck$')).toBe(true);
      });
      it('should match wetback', function() {
        expect(grawlix.isObscene('wetback')).toBe(true);
      });
      it('should match w3tb@ck', function() {
        expect(grawlix.isObscene('w3tb@ck')).toBe(true);
      });
    });

    describe('kike', function() {
      it('should match kikes', function() {
        expect(grawlix.isObscene('kikes')).toBe(true);
      });
      it('should match k1k3$', function() {
        expect(grawlix.isObscene('k1k3$')).toBe(true);
      });
      it('should match kike', function() {
        expect(grawlix.isObscene('kike')).toBe(true);
      });
      it('should match k1k3', function() {
        expect(grawlix.isObscene('k1k3')).toBe(true);
      });
      it('should match k i k e', function() {
        expect(grawlix.isObscene('k i k e')).toBe(true);
      });
    });

    describe('gook', function() {
      it('should match gooks', function() {
        expect(grawlix.isObscene('gooks')).toBe(true);
      });
      it('should match g00k$', function() {
        expect(grawlix.isObscene('g00k$')).toBe(true);
      });
      it('should match g o o k s', function() {
        expect(grawlix.isObscene('g o o k s')).toBe(true);
      });
      it('should match gook', function() {
        expect(grawlix.isObscene('gook')).toBe(true);
      });
      it('should match g00k', function() {
        expect(grawlix.isObscene('g00k')).toBe(true);
      });
      it('should match g_o_o_k', function() {
        expect(grawlix.isObscene('g_o_o_k')).toBe(true);
      });
    });

    describe('raghead', function() {
      it('should match ragheads', function() {
        expect(grawlix.isObscene('ragheads')).toBe(true);
      });
      it('should match rag-heads', function() {
        expect(grawlix.isObscene('rag-heads')).toBe(true);
      });
      it('should match r@gh3@d$', function() {
        expect(grawlix.isObscene('r@gh3@d$')).toBe(true);
      });
      it('should match raghead', function() {
        expect(grawlix.isObscene('raghead')).toBe(true);
      });
      it('should match rag-head', function() {
        expect(grawlix.isObscene('rag-head')).toBe(true);
      });
      it('should match r a g h e a d', function() {
        expect(grawlix.isObscene('r a g h e a d')).toBe(true);
      });
      it('should match r@gh3@d', function() {
        expect(grawlix.isObscene('r@gh3@d')).toBe(true);
      });
    });

    describe('towelhead', function() {
      it('should match towelheads', function() {
        expect(grawlix.isObscene('towelheads')).toBe(true);
      });
      it('should match towel-heads', function() {
        expect(grawlix.isObscene('towel-heads')).toBe(true);
      });
      it('should match t0w3lh3@d$', function() {
        expect(grawlix.isObscene('t0w3lh3@d$')).toBe(true);
      });
      it('should match towelhead', function() {
        expect(grawlix.isObscene('towelhead')).toBe(true);
      });
      it('should match towel-head', function() {
        expect(grawlix.isObscene('towel-head')).toBe(true);
      });
      it('should match t o w e l h e a d', function() {
        expect(grawlix.isObscene('t o w e l h e a d')).toBe(true);
      });
      it('should match t0w3lh3@d', function() {
        expect(grawlix.isObscene('t0w3lh3@d')).toBe(true);
      });
    });

    describe('injun', function() {
      it('should match injuns', function() {
        expect(grawlix.isObscene('injuns')).toBe(true);
      });
      it('should match 1njun$', function() {
        expect(grawlix.isObscene('1njun$')).toBe(true);
      });
      it('should match injun', function() {
        expect(grawlix.isObscene('injun')).toBe(true);
      });
      it('should match 1njun', function() {
        expect(grawlix.isObscene('1njun')).toBe(true);
      });
      it('should match i-n-j-u-n', function() {
        expect(grawlix.isObscene('i-n-j-u-n')).toBe(true);
      });
    });

    describe('squaw', function() {
      it('should match squaws', function() {
        expect(grawlix.isObscene('squaws')).toBe(true);
      });
      it('should match $qu@w$', function() {
        expect(grawlix.isObscene('$qu@w$')).toBe(true);
      });
      it('should match squaw', function() {
        expect(grawlix.isObscene('squaw')).toBe(true);
      });
      it('should match $qu@w', function() {
        expect(grawlix.isObscene('$qu@w')).toBe(true);
      });
    });

    describe('golliwog', function() {
      it('should match golliwogs', function() {
        expect(grawlix.isObscene('golliwogs')).toBe(true);
      });
      it('should match golliwoggs', function() {
        expect(grawlix.isObscene('golliwoggs')).toBe(true);
      });
      it('should match gollywogs', function() {
        expect(grawlix.isObscene('gollywogs')).toBe(true);
      });
      it('should match g0ll1w0g$', function() {
        expect(grawlix.isObscene('g0ll1w0g$')).toBe(true);
      });
      it('should match golliwog', function() {
        expect(grawlix.isObscene('golliwog')).toBe(true);
      });
      it('should match golliwogg', function() {
        expect(grawlix.isObscene('golliwogg')).toBe(true);
      });
      it('should match gollywog', function() {
        expect(grawlix.isObscene('gollywog')).toBe(true);
      });
      it('should match g0ll1w0g', function() {
        expect(grawlix.isObscene('g0ll1w0g')).toBe(true);
      });
    });

    describe('wog', function() {
      it('should match wogs', function() {
        expect(grawlix.isObscene('wogs')).toBe(true);
      });
      it('should match w0g$', function() {
        expect(grawlix.isObscene('w0g$')).toBe(true);
      });
      it('should match w_-_o_-_g_-_s', function() {
        expect(grawlix.isObscene('w_-_o_-_g_-_s')).toBe(true);
      });
      it('should match wog', function() {
        expect(grawlix.isObscene('wog')).toBe(true);
      });
      it('should match w0g', function() {
        expect(grawlix.isObscene('w0g')).toBe(true);
      });
      it('should match w  o  g', function() {
        expect(grawlix.isObscene('w  o  g')).toBe(true);
      });
      it('should match wwwoooooooggggggg', function() {
        expect(grawlix.isObscene('wwwoooooooggggggg')).toBe(true);
      });
      it('should match wooooooooogssss', function() {
        expect(grawlix.isObscene('wooooooooogssss')).toBe(true);
      });
    });

    describe('shitskin', function() {
      it('should match shitskins', function() {
        expect(grawlix.isObscene('shitskins')).toBe(true);
      });
      it('should match $h1t$k1n$', function() {
        expect(grawlix.isObscene('$h1t$k1n$')).toBe(true);
      });
      it('should match shitskin', function() {
        expect(grawlix.isObscene('shitskin')).toBe(true);
      });
      it('should match $h1t$k1n', function() {
        expect(grawlix.isObscene('$h1t$k1n')).toBe(true);
      });
    });

    describe('latrino', function() {
      it('should match latrinos', function() {
        expect(grawlix.isObscene('latrinos')).toBe(true);
      });
      it('should match latrino', function() {
        expect(grawlix.isObscene('latrino')).toBe(true);
      });
      it('should match l@tr1n0', function() {
        expect(grawlix.isObscene('l@tr1n0')).toBe(true);
      });
    });

    describe('chinkerbell', function() {
      it('should match chinkerbell', function() {
        expect(grawlix.isObscene('chinkerbell')).toBe(true);
      });
      it('should match ch1nk3rb3ll', function() {
        expect(grawlix.isObscene('ch1nk3rb3ll')).toBe(true);
      });
    });

    describe('shvooga', function() {
      it('should match shvoogas', function() {
        expect(grawlix.isObscene('shvoogas')).toBe(true);
      });
      it('should match shvooga', function() {
        expect(grawlix.isObscene('shvooga')).toBe(true);
      });
      it('should match $hv00g@', function() {
        expect(grawlix.isObscene('$hv00g@')).toBe(true);
      });
    });

    describe('negress', function() {
      it('should match negress', function() {
        expect(grawlix.isObscene('negress')).toBe(true);
      });
      it('should match n3gr3$$', function() {
        expect(grawlix.isObscene('n3gr3$$')).toBe(true);
      });
    });

    describe('sambo', function() {
      it('should match sambos', function() {
        expect(grawlix.isObscene('sambos')).toBe(true);
      });
      it('should match samboes', function() {
        expect(grawlix.isObscene('samboes')).toBe(true);
      });
      it('should match $@mb0$', function() {
        expect(grawlix.isObscene('$@mb0$')).toBe(true);
      });
      it('should match sambo', function() {
        expect(grawlix.isObscene('sambo')).toBe(true);
      });
      it('should match $@mb0', function() {
        expect(grawlix.isObscene('$@mb0')).toBe(true);
      });
      it('should match s a m b o', function() {
        expect(grawlix.isObscene('s a m b o')).toBe(true);
      });
    });

    describe('kaffir', function() {
      it('should match kaffirs', function() {
        expect(grawlix.isObscene('kaffirs')).toBe(true);
      });
      it('should match kaffers', function() {
        expect(grawlix.isObscene('kaffers')).toBe(true);
      });
      it('should match caffers', function() {
        expect(grawlix.isObscene('caffers')).toBe(true);
      });
      it('should match k@ff3r$', function() {
        expect(grawlix.isObscene('k@ff3r$')).toBe(true);
      });
      it('should match caffres', function() {
        expect(grawlix.isObscene('caffres')).toBe(true);
      });
      it('should match caffre', function() {
        expect(grawlix.isObscene('caffre')).toBe(true);
      });
      it('should match c a f f r e', function() {
        expect(grawlix.isObscene('c a f f r e')).toBe(true);
      });
      it('should match kaffir', function() {
        expect(grawlix.isObscene('kaffir')).toBe(true);
      });
      it('should match kaffer', function() {
        expect(grawlix.isObscene('kaffer')).toBe(true);
      });
      it('should match caffer', function() {
        expect(grawlix.isObscene('caffer')).toBe(true);
      });
      it('should match k@ff3r', function() {
        expect(grawlix.isObscene('k@ff3r')).toBe(true);
      });
      it('should match k a f f e r', function() {
        expect(grawlix.isObscene('k a f f e r')).toBe(true);
      });
    });

    describe('scunthorpe tests', function() {
      it('should pass niggle', function() {
        expect(grawlix.isObscene('niggle')).toBe(false);
      });
      it('should pass snigger', function() {
        expect(grawlix.isObscene('snigger')).toBe(false);
      });
      it('should pass niggard', function() {
        expect(grawlix.isObscene('niggard')).toBe(false);
      });
      it('should pass niggardly', function() {
        expect(grawlix.isObscene('niggardly')).toBe(false);
      });
      it('should pass kikel', function() {
        expect(grawlix.isObscene('kikel')).toBe(false);
      });
      it('should pass spice', function() {
        expect(grawlix.isObscene('spice')).toBe(false);
      });
      it('should pass spiccato', function() {
        expect(grawlix.isObscene('spiccato')).toBe(false);
      });
      it('should pass spick-and-span', function() {
        expect(grawlix.isObscene('spick-and-span')).toBe(false);
      });
      it('should pass spick and span', function() {
        expect(grawlix.isObscene('spick and span')).toBe(false);
      });
      it('should pass spicy', function() {
        expect(grawlix.isObscene('spicy')).toBe(false);
      });
      it('should pass auspicious', function() {
        expect(grawlix.isObscene('auspicious')).toBe(false);
      });
      it('should pass aspics', function() {
        expect(grawlix.isObscene('aspics')).toBe(false);
      });
      it('should pass gobbledegook', function() {
        expect(grawlix.isObscene('gobbledegook')).toBe(false);
      });
      it('should pass gooky', function() {
        expect(grawlix.isObscene('gooky')).toBe(false);
      });
      it('should pass injunction', function() {
        expect(grawlix.isObscene('injunction')).toBe(false);
      });
      it('should pass injunctive', function() {
        expect(grawlix.isObscene('injunctive')).toBe(false);
      });
      it('should pass oldsquaw', function() {
        expect(grawlix.isObscene('oldsquaw')).toBe(false);
      });
      it('should pass oldsquaws', function() {
        expect(grawlix.isObscene('oldsquaws')).toBe(false);
      });
      it('should pass squawk', function() {
        expect(grawlix.isObscene('squawk')).toBe(false);
      });
      it('should pass squawroot', function() {
        expect(grawlix.isObscene('squawroot')).toBe(false);
      });
      it('should pass hornswoggled', function() {
        expect(grawlix.isObscene('hornswoggled')).toBe(false);
      });
      it('should pass pollywog', function() {
        expect(grawlix.isObscene('pollywog')).toBe(false);
      });
    });
  });

  describe('#full functionality', function() {
    beforeAll(function() {
      grawlix.setDefaults({
        plugins: [
          { plugin: plugin }
        ],
        style: 'nazi'
      });
    });

    it("should censor X Gon' Give It To You, test 1", function() {
      var lyrics = "I'm a jail nigga\n" +
                   "So I face the world like it's Earl in the bullpen";
      var censor = "I'm a jail 卐卐卐卐卐\n" +
                   "So I face the world like it's Earl in the bullpen";
      expect(grawlix(lyrics)).toEqual(censor);
    });

    it("should censor X Gon' Give It To You, test 2", function() {
      var lyrics = "A dog to bow bow hug it\r\n" +
                   "Shoutout to niggaz that done it\r\n" +
                   "And it ain't even about the dough";
      var censor = "A dog to bow bow hug it\r\n" +
                   "Shoutout to 卐卐卐卐卐卐 that done it\r\n" +
                   "And it ain't even about the dough";
      expect(grawlix(lyrics)).toEqual(censor);
    });

    it('should censor Huck Finn', function() {
      var text = "Miss Watson, your runaway nigger Jim is down here two mile " +
          "below Pikesville, and Mr. Phelps has got him and he will give him " +
          "up for the reward if you send.";
      var exp = "Miss Watson, your runaway 卐卐卐卐卐卐 Jim is down here two " +
          "mile below Pikesville, and Mr. Phelps has got him and he will " +
          "give him up for the reward if you send.";
      expect(grawlix(text)).toEqual(exp);
    });

    it('should censor Mourning Dove (1927)', function() {
      var text = "If I was to marry a white man and he would dare call me a " +
          "'squaw' — as an epithet with the sarcasm that we know so well — I " + 
          "believe that I would feel like killing him.";
      var expt = "If I was to marry a white man and he would dare call me a " +
          "'卐卐卐卐卐' — as an epithet with the sarcasm that we know so well " + 
          "— I believe that I would feel like killing him.";
      expect(grawlix(text)).toEqual(expt);
    });

    it('should censor Dirty Harry', function() {
      var text = "Especially Spics.";
      var exp = "Especially 卐卐卐卐卐.";
      expect(grawlix(text)).toEqual(exp);
    });

    it('should censor the Encyclopedia of Swearing', function() {
      var text = "The word kike was born on Ellis Island when there were " + 
          "Jewish migrants who were also illiterate (or could not use Latin " +
          "alphabet letters).";
      var exp = "The word 卐卐卐卐 was born on Ellis Island when there were " + 
          "Jewish migrants who were also illiterate (or could not use Latin " +
          "alphabet letters).";
      expect(grawlix(text)).toEqual(exp);
    });

    it('should censor Major Kenneth Muir', function() {
      var text = "The Gooks will never drive the Argylls off this hill.";
      var exp = "The 卐卐卐卐卐 will never drive the Argylls off this hill.";
      expect(grawlix(text)).toEqual(exp);
    });

    it('should censor Alan Moore', function() {
      var text = "Without wishing to appear pedantic, I think that the " +
          "Golliwog these days is seen as an insulting racial stereotype " + 
          "rather than a racist character.";
      var exp = "Without wishing to appear pedantic, I think that the " +
          "卐卐卐卐卐卐卐卐 these days is seen as an insulting racial " + 
          "stereotype rather than a racist character.";
      expect(grawlix(text)).toEqual(exp);
    });

    it('should censor Duane Clarridge', function() {
      var txt = "It was my first direct Agency experience with the wog factor.";
      var exp = "It was my first direct Agency experience with the 卐卐卐 " +
          "factor.";
      expect(grawlix(txt)).toEqual(exp);
    });
    
  });

  describe('#style option', function() {

    it('should set the style of all filters', function() {
      plugin.init({
        style: 'redacted'
      });
      var isSet = _.every(plugin.filters, function(filter) {
        return (!_.has(filter, 'pattern') || filter.style === 'redacted');
      });
      expect(isSet).toBe(true);
    });

    it('should unset the style if set to false', function() {
      plugin.init({
        style: false
      });
      var isUnset = _.every(plugin.filters, function(filter) {
        return (_.isUndefined(filter.style) || filter.style === null);
      });
      expect(isUnset).toBe(true);
    });

    it('should unset the style if set to null', function() {
      plugin.init({
        style: null
      });
      var isUnset = _.every(plugin.filters, function(filter) {
        return (_.isUndefined(filter.style) || filter.style === null);
      });
      expect(isUnset).toBe(true);
    });

    afterAll(function() {
      // reset filter styles to default
      plugin.init({
        style: 'nazi'
      });
    });

  });

});