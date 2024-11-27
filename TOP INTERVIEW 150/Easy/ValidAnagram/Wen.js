var isAnagram = function (s, t) {
  // split the given strings to individual char
  // sort them, join them back
  return s.split('').sort().join() === t.split('').sort().join();
};

console.log(isAnagram('anagram', 'nagaram'));
