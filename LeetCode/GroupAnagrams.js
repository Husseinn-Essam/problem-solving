/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// n*k*logk , k is length of longest str
const groupAnagrams = () => {
  const anagramGroups = {};
  for (const str of strs) {
    const sign = str.split("").sort().join("");
    if (anagramGroups[sign]) {
      anagramGroups[sign].push(str);
    } else {
      anagramGroups[sign] = [str];
    }
  }
  return Object.values(anagramGroups);
};

// F for complexity
// const isAnagram = (a, b) => {
//   if (a.split("").sort().join("") == b.split("").sort().join("")) return true;
// };

// var groupAnagrams = function (strs) {
//   let outArr = [];
//   let anagrams = [];
//   let alreadyFound = [];
//   for (let i = 0; i < strs.length; i++) {
//     if (!alreadyFound.includes(strs[i].split("").sort().join(""))) {
//       anagrams.push(strs[i]);
//       for (let j = i + 1; j < strs.length; j++) {
//         if (isAnagram(strs[i], strs[j])) {
//           anagrams.push(strs[j]);
//           if (!alreadyFound.includes(strs[i].split("").sort().join("")))
//             alreadyFound.push(strs[i].split("").sort().join(""));
//         }
//       }
//       outArr.push(anagrams);
//       anagrams = [];
//     }
//   }
//   return outArr;
// };

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
