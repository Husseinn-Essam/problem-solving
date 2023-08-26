// O(n^2)
// var twoSum = function (nums, target) {
//   for (i = 0; i < nums.length; i++) {
//     const rem = target - nums[i];
//     for (j = 0; j <= nums.length - 1; j++) {
//       if (nums[j] == rem) {
//         return [i, j];
//       }
//     }
//   }
//   return [];
// };

// O(n)
var twoSum = function (nums, target) {
  let mp = new Map();
  for (i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (mp.has(diff)) {
      return [mp.get(diff), i];
    }
    mp.set(nums[i], i);
  }
};
console.log(twoSum([3, 2, 4], 6));
