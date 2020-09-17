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

const letterPositions = function(phrase) {
  const results = {};
  const letters = phrase.split('');
  for (let i = 0; i < letters.length; i ++) {
    let char = letters[i];
    if (!results[char]) {
      results[char] = [i];
    } else {
      results[char].push(i);
    }
  }
  return results;
};

console.log(letterPositions('hello sir'));
console.log(letterPositions("lighthouse in the house"));