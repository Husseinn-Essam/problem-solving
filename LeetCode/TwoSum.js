// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
var twoSum = function (nums, target) {
  for (i = 0; i < nums.length; i++) {
    const rem = target - nums[i];
    for (j = i + 1; j <= nums.length - 1; j++) {
      if (nums[j] == rem) {
        return [i, j];
      }
    }
  }
  return [];
};

console.log(twoSum([3, 2, 4], 6));
