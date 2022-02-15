namesArr = [
  "Megan",
  "Manny",
  "Todd",
  "Thomas",
  "BK",
  "CK",
  "John",
  "Juan",
  "Farrukh",
];

// function longestString(arr) {
//   let longest = arr.reduce((a, b) => {
//     return a.length > b.length ? a : b;
//   });
//   return longest;
// }

// console.log(longestString(namesArr));

let longest = namesArr.reduce((a, b) => {
  return a.length > b.length ? a : b;
});

console.log(longest);
