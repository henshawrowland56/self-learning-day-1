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
    assert(getPrimes(10) == [ 2, 3, 5, 7 ]);
  });
  it("should return [ 2, 3, 5, 7, 11, 13, 17, 19, 23 ] as prime numbers for input of 25", function() {
    assert(getPrimes(25) == [ 2, 3, 5, 7, 11, 13, 17, 19, 23 ]);
  });
  it("should return [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47 ] as prime numbers for input of 50", function() {
    assert(getPrimes(50) == [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47 ]);
  });
  it("should return [] as prime numbers for input of 0", function() {
    assert(getPrimes(0) == []);
  });
  it("should return [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73
 ] as prime numbers for input of 75", function() {
    assert(getPrimes(75) == [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73
 ]);
  });
  it("should return 7 as the last element for prime numbers for input of 7", function() {
    var testPrime = getPrimes(7);
    assert(testPrime[testPrime.length-1] == 7);
  });
  it("should return 2 as the first element for prime numbers for any input", function() {
    var testPrime = getPrimes(7);
    var testPrimes = getPrimes(500);
    assert(testPrime[0] == testPrimes[0]);
  });
});



