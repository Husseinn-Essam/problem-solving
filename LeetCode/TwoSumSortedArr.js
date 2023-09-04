/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

// O(n)
var twoSum = function (numbers, target) {
  let i = 0;
  let j = numbers.length - 1;
  while (i !== j) {
    if (numbers[i] + numbers[j] == target) return [i + 1, j + 1];
    if (numbers[i] + numbers[j] > target) j--;
    else if (numbers[i] + numbers[j] < target) i++;
  }
  return [];
};

// O(n^2)
// var twoSum = function (numbers, target) {
//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = i + 1; j <= numbers.length - 1; j++) {
//       if (numbers[i] + numbers[j] > target) break;
//       if (numbers[i] + numbers[j] == target) return [i + 1, j + 1];
//     }
//   }
//   return [];
// };

console.log(twoSum([0, 0, 3, 4], 0));
