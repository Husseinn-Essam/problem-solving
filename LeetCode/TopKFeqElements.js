/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let repeated = {};
  let frequency = [];
  nums = nums.sort();
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i + 1]) {
      if (repeated.hasOwnProperty(nums[i])) {
        repeated[nums[i]]++;
      } else {
        repeated[nums[i]] = 2;
      }
    } else if (nums[i] != nums[i + 1] && !repeated.hasOwnProperty(nums[i])) {
      repeated[nums[i]] = 1;
    }
  }
  const entries = Object.entries(repeated);

  //   let minV = 0;
  //   let minK;
  //   for (const [key, value] of entries) {
  //     if (value > maxV) {
  //       maxV = value;
  //       maxK = key;
  //     }
  //   }
  return entries;
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 1));
//   let repeatedKeys = [];
//   let oneTimeKeys = [];
//   for (const [key, value] of entries) {
//     if (value > 1) {
//       repeatedKeys.push(key);
//     } else {
//       oneTimeKeys.push(key);
//     }
//   }
//   if (repeatedKeys.length == 0)
//     return oneTimeKeys.map((str) => parseInt(str, 10));
//   return repeatedKeys.map((str) => parseInt(str, 10));
