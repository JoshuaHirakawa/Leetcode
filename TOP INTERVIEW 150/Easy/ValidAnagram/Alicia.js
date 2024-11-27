// > VALID ANAGRAM
// ! EASY

// ? URL: 'https://leetcode.com/problems/valid-anagram/description/?envType=problem-list-v2&envId=mwy95397'

// Given two strings s and t, return true if t is ananagram of s, and false otherwise.

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

const isAnagram = (s, t) => {
  // check if strings have same length
  if (s.length !== t.length) {
    return false;
  } else {
    const str1 = s.split('').sort().join('');
    const str2 = t.split('').sort().join('');
    // console.log(str1);
    // console.log(str2);
    return str1 === str2;
  }
};

console.log(isAnagram('rat', 'car'));
console.log(isAnagram('fried', 'fired'));
