/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// time : O(n), space: O(n) bucket sort method
var topKFrequent = function (nums, k) {
  let frequency = new Map();
  let bucket = [];
  let mostFreq = [];
  nums.forEach((num) => {
    frequency.set(num, (frequency.get(num) || 0) + 1);
  });
  for (let [num, freq] of frequency) {
    bucket[freq] = (bucket[freq] || new Set()).add(num);
  }
  for (let i = bucket.length - 1; i >= 0; i--) {
    if (k == mostFreq.length) break;
    if (bucket[i]) {
      mostFreq.push(...bucket[i]);
    }
  }
  return mostFreq;
};

// time : O(n*logn), space : O(n)

// var topKFrequent = function (nums, k) {
//   let repeated = {};
//   let mostFreq = [];
//   nums = nums.sort();
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] == nums[i + 1]) {
//       if (repeated.hasOwnProperty(nums[i])) {
//         repeated[nums[i]]++;
//       } else {
//         repeated[nums[i]] = 2;
//       }
//     } else if (nums[i] != nums[i + 1] && !repeated.hasOwnProperty(nums[i])) {
//       repeated[nums[i]] = 1;
//     }
//   }

//   const entries = Object.entries(repeated);
//   entries.sort((a, b) => b[1] - a[1]);
//   for ([key, val] of entries) {
//     if (k === 0) break;
//     mostFreq.push(key);
//     k--;
//   }

//   return mostFreq.map((str) => parseInt(str, 10));
// };

console.log(topKFrequent([1, 1, 1, 2, 2, 3, 3, 3, 4], 2));
