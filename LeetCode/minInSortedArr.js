/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let [left, right] = [0, nums.length - 1];

  while (left < right) {
    const mid = (left + right) >> 1;
    if (nums[mid] < nums[mid - 1]) return nums[mid];

    const isTarget = nums[left] < nums[right];
    if (isTarget) return nums[left];

    if (nums[mid] >= nums[left]) {
      left = mid + 1;
    } else if (nums[mid] < nums[left]) right = mid;
  }
  return nums[left];
};
console.log(findMin([3, 1, 2]));
