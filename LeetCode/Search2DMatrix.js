/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

// O(log(m) + log(n)) m = rows , n = cols
var searchMatrix = function (matrix, target) {
  let [leftArrI, rightArrI] = [0, matrix.length - 1];
  while (leftArrI <= rightArrI) {
    midArrI = Math.round((leftArrI + rightArrI) / 2);
    let [left, right] = [0, matrix[midArrI].length - 1];
    if (target < matrix[midArrI][left]) rightArrI = midArrI - 1;
    else if (target > matrix[midArrI][right]) leftArrI = midArrI + 1;
    else {
      while (left <= right) {
        mid = Math.round((left + right) / 2);
        if (matrix[midArrI][mid] < target) left = mid + 1;
        else if (matrix[midArrI][mid] > target) right = mid - 1;
        else if (matrix[midArrI][mid] == target) return true;
      }
      return false;
    }
  }
  return false;
};

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
);
