/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let prefix = 1;
  let postfix = 1;
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    prefix = i == 0 ? prefix : prefix * nums[i - 1];
    result[i] = prefix;
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    postfix = i == nums.length - 1 ? postfix : postfix * nums[i + 1];
    result[i] *= postfix;
  }
  return result;
};
console.log(productExceptSelf([1, 2, 3, 4]));
