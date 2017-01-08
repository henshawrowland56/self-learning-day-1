// testing code goes here

'use strict'

var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var myApp = require('getPrimes.js');

describe("Test for Proper functionality", function() {
  it("should return [ 2, 3, 5, 7, 11, 13, 17, 19 ] as prime numbers for input of 20", function() {
    assert(myApp.getPrimes(20) == [ 2, 3, 5, 7, 11, 13, 17, 19 ]);
  });
  
});



