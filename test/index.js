var assert      = require('assert');
var validators  = require('numeric-validators');

describe('number-validators', function() {

  describe('integer', function() {

    var int = validators.integer;

    it('should be true', function() {
      assert(int(0));
      assert(int(1));
      assert(int('0'));
      assert(int('1'));
      assert(int(2));
      assert(int(-2));
    });

    it('should be false', function() {
      assert(!int([]));
      assert(!int({}));
      assert(!int(true));
      assert(!int(false));
      assert(!int(3.14));
      assert(!int(-3.333));
      assert(!int('3.14'));
      assert(!int('-3.333'));
      assert(!int('3.14a'));
      assert(!int('foobar'));
      assert(!int('0123'));
    });

  });

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

  describe('lessThan', function() {

    var lessThan = validators.lessThan(100);

    it('should be true', function() {
      assert(lessThan(-1));
      assert(lessThan(0));
      assert(lessThan(99));
      assert(lessThan(0.1));
      assert(lessThan('75'));
    });

    it('should be false', function() {
      assert(!lessThan(100));
      assert(!lessThan(101));
      assert(!lessThan(100.1));
      assert(!lessThan('foobar'));
      assert(!lessThan('0123'));
    });

  });

  describe('greaterThan', function() {

    var greaterThan = validators.greaterThan(100);

    it('should be true', function() {
      assert(greaterThan(900));
      assert(greaterThan(101));
      assert(greaterThan(100.1));
    });

    it('should be false', function() {
      assert(!greaterThan(-1));
      assert(!greaterThan(0));
      assert(!greaterThan(99));
      assert(!greaterThan(0.1));
      assert(!greaterThan('75'));
      assert(!greaterThan('foobar'));
      assert(!greaterThan('0123'));
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