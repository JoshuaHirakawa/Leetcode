// > TOP K FREQUENT ELEMENTS
// * MEDIUM

// ? URL: 'https://leetcode.com/problems/top-k-frequent-elements/?envType=problem-list-v2&envId=mwy95397'

// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.

// Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

//input: array of nums and an integer
//output: a number from passed in array
const topKFrequent = function (nums, k) {
  //k must be a number between 1 and number of unique elements in array
  //maybe use a countObj to store occurances
  const countObj = {};
  //iterate over nums array, counting each instance of a number
  for (const num of nums) {
    countObj[num] ? countObj[num]++ : (countObj[num] = 1);
  }
  console.log(countObj);

  //create an array with the number of elements in passed in array using Array.fill
  const rankingArr = Array(nums.length).fill([]);
  console.log(rankingArr);

  //convert countObj to array containing number and rank ex: [3, 2] 3 appears 2nd most
  for (const key in countObj) {
    //take the value stored in countObj[key] and assign the key to that value index in rankingArr
    rankingArr[countObj[key]] = key;
  }
  console.log(rankingArr);
};

//test case:
const arr = [1, 2, 3, 4, 4, 4, 2, 1, 1, 1];
console.log(topKFrequent(arr, 3)); // -> expecting third most frquent number: 2
