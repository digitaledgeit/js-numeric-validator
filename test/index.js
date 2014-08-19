var assert      = require('assert');
var validators  = require('numeric-validators');

describe('number-validators', function() {

  describe('float', function() {

    var float = validators.float;

    it('should be true', function() {
      assert(float(0));
      assert(float(1));
      assert(float(3.14));
      assert(float(-3.333));
      assert(float('0'));
      assert(float('1'));
      assert(float('3.14'));
      assert(float('-3.333'));
    });

    it('should be false', function() {
      assert(!float([]));
      assert(!float({}));
      assert(!float(true));
      assert(!float(false));
      assert(!float('3.14a'));
      assert(!float('foobar'));
      assert(!float('0123'));
    });

  });

});