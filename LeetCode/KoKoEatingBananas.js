/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

var minEatingSpeed = function (piles, h) {
  let [left, right] = [1, piles[piles.length - 1]];
  let res;
  while (left <= right) {
    let mid = Math.round((left + right) / 2);
    let timeEating = 0;

    for (let i = 0; i <= piles.length - 1; i++) {
      timeEating += Math.ceil(piles[i] / mid);
    }
    if (timeEating > h) left = mid + 1;
    else if (timeEating <= h) {
      right = mid - 1;

      res = mid;
    }
  }
  return res;
};

console.log(minEatingSpeed([30, 11, 23, 4, 20], 6));
//console.log(minEatingSpeed([3, 6, 7, 11], 8));
