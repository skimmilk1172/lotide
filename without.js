const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
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

const assertArraysEqual = function(arr1,arr2) {
  const result = eqArrays(arr1,arr2);
  if (!result) {
    console.log(`False. These are not equal`);
  } else {
    console.log(`True. These are equal`);
  }
};


const without = function(source, remove) {
  let output = [];
  for (let i = 0; i < source.length; i++) {
    let Keep = true;
    for (let j = 0; j < remove.length; j++) {
      if (source[i] === remove[j]) {
        Keep = false;
        if (i === source.length - 1) {
          return output;
        }
      }
      if (Keep && remove.length - 1 === j) {
        output.push(source[i]);
      }
    }
  }
  return output;
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);