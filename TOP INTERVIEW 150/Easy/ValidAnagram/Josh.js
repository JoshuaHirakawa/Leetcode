//input: two strings
//output: boolean

const isAnagram = function (s, t) {
  const countObjs = {};
  //   const countObjt = {};
  for (let i = 0; i < s.length; i++) {
    countObjs[s[i]] ? countObjs[s[i]]++ : (countObjs[s[i]] = 1);
  }

  //   for (let i = 0; i < t.length; i++) {
  //     countObjt[t[i]] ? countObjt[t[i]]++ : (countObjt[t[i]] = 1);
  //   }

  console.log(countObjs);
  //iterate over t
  for (let i = 0; i < t.length; i++) {
    if (!countObjs[t[i]]) {
      return false;
    }
    //otherwise, decrement the property in countObjs
    countObjs[t[i]]--;
  }
  console.log(countObjs);
  //create
  const resultArr = Object.entries(countObjs);
  console.log(resultArr);

  for (let i = resultArr.length - 1; i >= 0; i--) {
    if (resultArr[i][1] === 0) resultArr.pop();
    // console.log(resultArr)
  }
  console.log(resultArr);
  return resultArr.length ? false : true;
};

console.log(isAnagram('anagram', 'gramana'));

var isAnagramMiles = function (s, t) {
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
    if (!cache2[t[j]]) {
      cache2[t[j]] = 1;
    } else {
      cache2[t[j]]++;
    }
  }
  // console.log(Object.entries(cache1).sort().toString());
  // console.log(Object.entries(cache2).sort().toString());
  const arr1 = Object.entries(cache1).sort().toString();
  const arr2 = Object.entries(cache2).sort().toString();
  return arr1 == arr2;
};

console.log(isAnagramMiles('hello', 'dog'));
console.log(isAnagramMiles('heart', 'earth'));
