const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

 const countLetters = function(sentence) {
  let letterAmount = {};
  let letters = sentence.split('');
  for (let i = 0; i < sentence.length; i ++) {
    const char = letters[i];
    if (char !== ' ') {
      if (letterAmount[char]) {
        letterAmount[char] += 1;
      } else {
        letterAmount[char] = 1;
      }
    }
  }
  return letterAmount;
};


console.log(countLetters('lighthouse in the house'));