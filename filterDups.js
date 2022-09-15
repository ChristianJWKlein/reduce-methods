//credits to Todd Albert and Brian Serein

numsArr = [4, 5, 8, 22, 88, 33, 5, 7, 8, 9, 4, 1, 7, 2];

function filterDupes(arr) {
  const cleanArray = arr.reduce((accum, elem) => {
    if (!accum.includes(elem)) {
      return [...accum, elem];
    }
    return accum;
  }, []);
  return cleanArray;
}
console.log(filterDupes(numsArr));
