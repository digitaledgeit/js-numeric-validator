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

  describe('between', function() {

    var between = validators.between(0, 100);

    it('should be true', function() {
      assert(between(0));
      assert(between(50));
      assert(between(100));
      assert(between(0.1));
      assert(between('75'));
    });

    it('should be false', function() {
      assert(!between(-1));
      assert(!between(101));
      assert(!between(-0.1));
      assert(!between(100.1));
      assert(!between('foobar'));
      assert(!between('0123'));
    });

  });

});