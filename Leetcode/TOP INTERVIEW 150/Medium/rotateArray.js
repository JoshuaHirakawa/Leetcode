//189. Rotate Array // > MEDIUM
//Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation:
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

// Constraints:

// 1 <= nums.length <= 105
// -231 <= nums[i] <= 231 - 1
// 0 <= k <= 105

// Follow up:

// Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
// Could you do it in-place with O(1) extra space?

/**
 * @param {number[]} nums
 * @param {number} k
//  * @return {void} Do not return anything, modify nums in-place instead.
 */

//NAIVE APPROACH
//input: array of nums and a number (steps)
//output: array of nums
// const rotate = function (nums, steps) {
//   //basecase: if steps is equal to 0 return
//   if (steps === 0) return nums;

//   //[first, ...rest, last]
//   const [first, ...rest] = nums; // [first = 1,   rest = [ 2, 3, 4, 5, 6,]

//   //recursive case: return the result of invoking rotate passing in shifted elements and steps decremented
//   return rotate([...rest, first], steps - 1);
// };

// //REFACTOR FOR RECURSIVEV APPROACH BUT WISH ELEMENT SWAPPING
// const rotate = function (
//   nums,
//   steps,
//   start = steps - 1,
//   end = nums.length - 1
// ) {
//   //basecase: check if steps is <= 0, if so return nums
//   if (steps <= 0) return nums;

//   //swap element at start index with element at end index (new array with constant space)
//   [nums[start], nums[end]] = [nums[end], nums[start]];

//   //return the result of invoking function passing in updated parameters
//   return rotate(nums, steps - 1, start - 1, end - 1);
// };

// input: array of nums and a number (steps)
// output: array of nums
const rotate = function (nums, steps) {
  //use remainder operator to eliminate unecessary rotation if steps is greater than nums.length
  const step = steps % nums.length;

  // helper function to swap elements in array
  function swapper(arr, start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
      // console.log(arr)
    }
  }
  //this step reverses the array
  swapper(nums, 0, nums.length - 1);

  //this step reverses/restores the order of first part of array
  swapper(nums, 0, step - 1);

  // //this step reverses/restores the order of second part of array
  swapper(nums, step, nums.length - 1);

  return nums;
};

//testcase:
const arr1 = [1, 2, 3, 4, 5, 6];
console.log(rotate(arr1, 2)); // -> [4, 5, 6, 1, 2, 3]
