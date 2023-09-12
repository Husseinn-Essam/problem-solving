/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let [left, right] = [0, nums.length - 1];
  while (left <= right) {
    const mid = Math.round((left + right) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) right = mid - 1;
  }
  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));
