const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findKeyValue = function(object, objectValue) {
  for (let key in object) {
    if (objectValue === object[key]) {
      return key;
    }
  }
  return undefined;
};

console.log(assertEqual(findKeyValue(bestTVShowsByGenre, "The Wire"), "drama"));
console.log(assertEqual(findKeyValue(bestTVShowsByGenre, "That '70s Show"), undefined));
console.log(assertEqual(findKeyValue(bestTVShowsByGenre, "The Expanse"), "sci_fi"));