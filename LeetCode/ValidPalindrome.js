/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let newS = s
    .split(" ")
    .join("")
    .replace(/[,.:()]/g, "")
    .toLowerCase();

  console.log(newS);
  for (let i = 0; i < s.length / 2; i++) {
    if (newS[i] != newS[newS.length - 1 - i]) {
      return false;
    }
  }
  return true;
};
console.log(isPalindrome("A man, a plan, a canal: Panama"));
