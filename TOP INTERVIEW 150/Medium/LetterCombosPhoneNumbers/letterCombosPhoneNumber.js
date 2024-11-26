// 17. Letter Combinations of a Phone Number // > MEDIUM

// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

//2-9 are the numbers on a phone which contian letters
//letters can be grouped in subarrays
//should numbers be index of outer array?
const digitLetters = [
  [], // accounting for 0 on keypad
  [], // accounting for 1 on keypad
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
  ["j", "k", "l"],
  ["m", "n", "o"],
  ["p", "q", "r", "s"],
  ["t", "u", "v"],
  ["w", "x", "y", "z"],
];

//create a function which takes in a string representing the number digits pressed on phone //ex: --> '23'
function phoneLetterCombos(digits) {
  //result variable of an empty array
  const result = [];
  //use a helper function called backtrack which accepts a combo string and an index
  const backtrack = (combo, index) => {
    //basecase: check if combo length matches the length of passed in digits if so, push a new array contianing elements of combo to result array
    if (combo.length === digits.length) {
      result.push(combo);
      return;
    }

    //define letter by accessing digitLetters array and finding the current subarray of the passed in digits arg
    const letters = digitLetters[digits[index]];

    // if (letters.length === 0) {
    //   backtrack(combo, index + 1);
    //   return;
    // }

    //use a for of loop to iterate over
    for (let letter of letters) {
      backtrack(combo + letter, index + 1);
    }
  };

  //invoke backtrack function passing in an initial empty string and index of 0
  backtrack("", 0);

  //return updated result array
  return result;
}

console.log(phoneLetterCombos("476"));
// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

// Example 2:

// Input: digits = ""
// Output: []
// Example 3:

// Input: digits = "2"
// Output: ["a","b","c"]
