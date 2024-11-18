const twoSumskies = (nums, target) => {
  //create an object to store remainders (target minus current num of array)
  const remainders = {};
  //iterate over array [1, 2, 6, 3, 7] target: 5
  for (let i = 0; i < nums.length; i++) {
    console.log(remainders);
    //calculate the remainder
    const currentRemainder = target - nums[i];

    if (remainders.hasOwnProperty(nums[i])) {
      //if so return property value
      console.log("found it");
      return [remainders[nums[i]], i];
    }

    //otherwise, create new property where remainder is value
    else {
      //   console.log("creating new prop");
      remainders[currentRemainder] = nums[i];
    }
  }
};

console.log(twoSumskies([1, 2, 6, 3, 7], 5));

// const myMap = new Map();
// myMap.set("Josh", 30);
// myMap.set("MJ", 29);
// myMap.set("Aditi", 28);
// const myNum = 50;
// myMap.set(50, "joshua");
// console.log(myMap.has("MJ"));
// console.log(myMap.get("MJ"));
// console.log(myMap.get(myNum));
