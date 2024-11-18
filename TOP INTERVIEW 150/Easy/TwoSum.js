//   TWO SUM
// > Medium

// Hint
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//input: array of nums ex: [1, 2, 6, 3, 7]
//output: and array of two nums that add up to target num ex: [2, 3] target = 5
// var twoSum = function (nums, target) {
//   //iterate over passed in array
//   for (let i = 0; i < nums.length; i++) {
//     //for each iteration, use another for loop to iterate over all remaining nums in array
//     for (let j = 1; j < nums.length; j++) {
//       //check if they add up to target num
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// };

// console.log(twoSum([1, 2, 6, 3, 7], 5)); // [1,3]

// 🌳🌳🌳🌳🌳🌳🌳🌳🌳🌳🌳🌳🌳🌳🌳🌳🌳🌳🌳🌳🌳🌳🌳🌳🌳🌳🌳🌳🌳🌳🌳🌳🌳🌳
// 🌳
// 🌳     🐝           🦝                 🌲
// 🌳
// 🌳     | | | |    🦋                🦩         🐕
// 🌳     | | | |
// 🌳      🐐            🌲                     🐧
// 🌳
// 🌳🌳🌳🌳🌳🌳🌳🌳🌳🌳🌳🌳🌳🌳🌳🌳🌳🌳🌳🌳🌳🌳🌳🌳🌳🌳🌳🌳🌳🌳🌳🌳🌳🌳

// > SOLVE IN O(n) time:

const twoSumskies = (nums, target) => {
  //create an object to store remainders (target minus current num of array)
  const cache = {};
  //iterate over array [1, 2, 6, 3, 7] target: 5
  for (let i = 0; i < nums.length; i++) {
    // console.log(remainders);
    //calculate the remainder
    const currentRemainder = target - nums[i];

    if (cache.hasOwnProperty(nums[i])) {
      //if so return an array with value or property with current num key and the index of
      console.log("found it");
      return [cache[nums[i]], i];
    }

    //otherwise, create new property where remainder is key and current num is the value
    else {
      //   console.log("creating new prop");
      cache[currentRemainder] = i;
    }
  }
};

console.log(twoSumskies([0, 2, 1, 3, 9], 10));

// console.log(twoSumskies([1, 2, 6, 3, 7], 5));
// // const inpArr = [1, 2, 6, 3, 7]
// const myMap = new Map();
// myMap.set("Josh", 30);
// myMap.set("MJ", 29);
// myMap.set("Aditi", 28);
// console.log(myMap.has("MJ"));
// console.log(myMap.get("MJ"));

// const twoSumskiesADITI = (nums, target) => {
//   //create an object to store remainders (target minus current num of array)
//   const remainders = new Map();
//   //iterate over array
//   for (let i = 0; i < nums.length; i++) {
//     console.log(remainders);
//     //calculate the remainder
//     const currentRemainder = target - nums[i];
//     //with each iteration check cache if remainder exists
//     //   console.log("creating new prop");
//     remainders.set(currentRemainder, nums[i]);

//     if (remainders.get(currentRemainder) + remainders.get(nums[i]) === target) {
//       return [i];
//     }
//   }
// };

// console.log(twoSumskiesADITI([1, 2, 6, 3, 7], 5));

const newSum = (nums, target) => {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    let rem = target - nums[i];
    if (obj.hasOwnProperty(rem)) {
      return [obj[rem], i];
    }

    obj[nums[i]] = i;
  }
};

console.log(newSum([1, 2, 6, 3, 7], 5));
