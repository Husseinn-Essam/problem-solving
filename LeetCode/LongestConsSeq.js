/**
 * @param {number[]} nums
 * @return {number}
 */

// time : O(n), Space: O(n) Set DS strat
var longestConsecutive = function (nums) {
  if (nums.length == 0) return 0;
  let numSet = new Set(nums);
  let longest = 0;
  let count = 1;
  numSet.forEach((num) => {
    if (!numSet.has(num - 1)) {
      while (numSet.has(num + 1)) {
        count++;
        num = num + 1;
        next = numSet.has(num + 1);
      }
      longest = longest > count ? longest : count;
      count = 1;
    }
  });

  return longest;
};

console.log(longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]));
