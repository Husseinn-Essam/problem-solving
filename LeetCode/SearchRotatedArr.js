/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let [left, right] = [0, nums.length - 1];
  while (left <= right) {
    const mid = (left + right) >> 1;
    let foundAtLeft = nums[left] == target;
    let foundAtRight = nums[right] == target;
    let foundAtmid = nums[mid] == target;
    if (foundAtLeft) return left;
    if (foundAtRight) return right;
    if (foundAtmid) return mid;
    if (nums[left] <= nums[mid]) {
      if (nums[left] < target && nums[mid] > target) {
        right = mid - 1;
      } else {
        left = left + 1;
      }
    }
    if (nums[left] > nums[mid]) {
      if (nums[mid] < target && nums[right] > target) left = mid + 1;
      else right = mid - 1;
    }
  }
  return -1;
};

console.log(search([4, 5, 6, 7, 8, 1, 2, 3], 8));
console.log(search([8, 9, 2, 3, 4], 9));
