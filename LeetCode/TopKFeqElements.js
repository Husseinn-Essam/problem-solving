/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let repeated = {};
  let mostFreq = [];
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
  entries.sort((a, b) => b[1] - a[1]);
  for ([key, val] of entries) {
    if (k === 0) break;
    mostFreq.push(key);
    k--;
  }

  return mostFreq.map((str) => parseInt(str, 10));
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3, 3, 3, 4], 2));
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
