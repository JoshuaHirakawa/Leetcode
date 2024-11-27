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

var isAnagram = function (s, t) {
  const cache1 = {};
  const cache2 = {};
  for (let i = 0; i < s.length; i++) {
    if (!cache1[s[i]]) {
      cache1[s[i]] = 1;
    } else {
      cache1[s[i]]++;
    }
  }
  for (let j = 0; j < t.length; j++) {
    if (!cache1[t[j]]) {
      cache2[t[j]] = 1;
    } else {
      cache2[t[j]]++;
    }
  }
  return (
    Object.entries(cache1).sort().toString() ===
    Object.entries(cache2).sort().toString()
  );
};

console.log(isAnagram('hello', 'dog'));
console.log(isAnagram('heart', 'earth'));
