const eqArrays = require('./eqArrays');

const assertArraysEquals = function(arr1,arr2) {
  const result = eqArrays(arr1,arr2);
  if (!result) {
    console.log(`False. These are not equal`);
  } else {
    console.log(`True. These are equal`);
  }
};

module.exports = assertArraysEquals