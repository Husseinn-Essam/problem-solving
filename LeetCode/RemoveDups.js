/**
 * @param {number[]} nums
 * @return {number}
 */
//O(n)

var removeDuplicates = function (nums) {
  let uniques = [];
  let c = 0;
  nums.forEach((n) => {
    if (!uniques.includes(n)) {
      uniques.push(n);
    }
  });
  for (i = 0; i < nums.length; i++) {
    nums[i] = uniques[i];
  }

  return uniques.length;
};

console.log(removeDuplicates([1, 1, 2]));
