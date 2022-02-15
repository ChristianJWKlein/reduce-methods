numsArr = [4, 5, 8, 22, 88, 33, 5, 7, 8, 9, 4, 1, 7, 2];

let lowestVal = numsArr.reduce((a, b) => {
  return a > b ? b : a;
});

console.log(lowestVal);
