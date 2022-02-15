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

// function shortestString(arr) {
//   let shortest = arr.reduce((a, b) => {
//     return a.length > b.length ? b : a;
//   });
//   return shortest;
// }

// console.log(shortestString(namesArr));

let shortest = namesArr.reduce((a, b) => {
  return a.length > b.length ? b : a;
});

console.log(shortest);
