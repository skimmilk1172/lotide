const assertArraysEqual = function(arr1,arr2) {
  const result = eqArrays(arr1,arr2);
  if (!result) {
    console.log(`False. These are not equal`);
  } else {
    console.log(`True. These are equal`);
  }
};

const eqArrays = function(arr1,arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

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

console.log(middle([1, 2]));