class Solution {
  encode(strs) {
    const delimiter = "::";
    return strs.join(delimiter);
  }

  decode(str) {
    return str.split("::");
  }
}

// Test cases
const solution = new Solution();
const encodedString = solution.encode(["s::", "dd"]);
console.log(encodedString); // Output: "s::::dd"

const decodedArray = solution.decode(encodedString);
console.log(decodedArray); // Output: ['s::', 'dd']
