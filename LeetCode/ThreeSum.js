/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// time : O(n^2)
var threeSum = function (nums) {
  nums = nums.sort((a, b) => a - b);
  const result = [];

  for (let k = 0; k < nums.length - 2; k++) {
    if (k > 0 && nums[k] === nums[k - 1]) {
      continue;
    }

    let i = k + 1;
    let j = nums.length - 1;

    while (i < j) {
      const sum = nums[k] + nums[i] + nums[j];

      if (sum === 0) {
        result.push([nums[k], nums[i], nums[j]]);
        while (i < j && nums[i] === nums[i + 1]) i++;
        while (i < j && nums[j] === nums[j - 1]) j--;
        i++;
        j--;
      } else if (sum < 0) {
        i++;
      } else {
        j--;
      }
    }
  }

  return result;
};

//attempt 1 almost solved o(nlogn)
// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var threeSum = function (nums) {
//   let result = [];
//   let i = 0;
//   let j = nums.length - 1;
//   let comp = 0;
//   nums = nums.sort();
//   const posNums = new Map();
//   const negNums = new Map();
//   nums.forEach((num, index) => {
//     if (num >= 0) {
//       posNums.set(num, index);
//     } else {
//       negNums.set(num, index);
//     }
//   });

//   while (i != j) {
//     if (i > 0 && nums[i] == nums[i - 1]) {
//       i++;
//       continue;
//     }
//     if (nums[i] + nums[j] > 0) {
//       comp = 0 - (nums[i] + nums[j]);
//       if (
//         negNums.has(comp) &&
//         negNums.get(comp) !== i &&
//         negNums.get(comp) !== j
//       )
//         result.push([nums[i], nums[negNums.get(comp)], nums[j]]);
//       j--;
//     } else if (nums[i] + nums[j] < 0) {
//       comp = 0 - (nums[i] + nums[j]);
//       if (
//         posNums.has(comp) &&
//         posNums.get(comp) !== i &&
//         posNums.get(comp) !== j
//       )
//         result.push([nums[i], nums[posNums.get(comp)], nums[j]]);
//       i++;
//     } else {
//       if (posNums.has(0)) result.push([nums[i], nums[posNums.get(0)], nums[j]]);
//       i++;
//     }
//   }

//   return result;
// };

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
