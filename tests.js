// testing code goes here

//'use strict'

var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var getPrimes = require('getPrimes');

describe("Test for Proper functionality", function() {
  it("should return [ 2, 3, 5, 7, 11, 13, 17, 19 ] as prime numbers for input of 20", function() {
    assert(getPrimes(20) == [ 2, 3, 5, 7, 11, 13, 17, 19 ]);
  });
  it("should return [ 2, 3, 5, 7 ] as prime numbers for input of 10", function() {
    assert(getPrimes(20) == [ 2, 3, 5, 7 ]);
  });
});



