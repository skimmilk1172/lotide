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

const assertArraysEqual = function(arr1,arr2) {
  const result = eqArrays(arr1,arr2);
  if (!result) {
    console.log(`False. These are not equal`);
  } else {
    console.log(`True. These are equal`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];
const map = function(array,callback){
  const results = [];
    for(item of array) {
      results.push(callback(item));
    }
    return results;
    }
  const results1 = map(words, word => word[0]);
  console.log(assertArraysEqual(results1,[ 'g', 'c', 't', 'm', 't' ]));
