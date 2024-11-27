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

// var isAnagram = function (s, t) {};

const isAnagram = (s, t) => {
  // * Check if both word lengths match; return false if not matched
  if (s.length !== t.length) return false;
  const cache = {}; // * Create a cache obj to store word1
  ////////////////////////////////////////////////////////////////
  // * Loop through word1; store letters freq
  for (let i = 0; i < s.length; i++) {
    cache[s[i]] = (cache[s[i]] || 0) + 1;
  }
  ////////////////////////////////////////////////////////////////
  // * Use letters of word2 to decrement letters from cache obj
  for (let j = 0; j < t.length; j++) {
    //  * Return false if curr letter not in cache
    if (!cache[t[j]]) return false;
    cache[t[j]]--;
  }
  ////////////////////////////////////////////////////////////////
  // * Return false if cache obj !== 0 --> for of loop?!
  for (const key in cache) {
    if (cache[key] !== 0) return false;
  }
  ////////////////////////////////////////////////////////////////
  return true;
};

////////////////////////////////////////////////////////////////

// https://www.guinnessworldrecords.com/world-records/73259-longest-anagram#:~:text=The%20longest%20scientific%20transposals%20are%20hydroxydesoxycorticosterone%20and%20hydroxydeoxycorticosterones%2C%20with%2027%20letters.&text=Comments%20below%20may%20relate%20to%20previous%20holders%20of%20this%20record.

const word1 = 'hydroxydesoxycorticosterone';
const word2 = 'hydroxydeoxycorticosterones';

console.log(isAnagram(word1, word2));
