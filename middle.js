
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');


const middle = function(array) {
  let newArray = [];
  if (array.length <= 2 && array.length > 0) {
    console.log('Array does not have enough to find middle value')
  } else if (array.length % 2 === 0) {
    newArray = [array[(array.length/2 - 1)], array[(array.length / 2)]]
  } else if (array.length % 2 !== 0) {
    newArray = [array[Math.floor(array.length/2)]]
  }
  return newArray
};

module.exports = middle;