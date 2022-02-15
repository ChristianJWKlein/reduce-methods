numsArr = [4, 5, 8, 22, 88, 33, 5, 7, 8, 444, 4, 1, 7, 2];

let highestVal = numsArr.reduce((a, b) => {
  return a > b ? a : b;
});

console.log(highestVal);
