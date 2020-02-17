/**
 * Create a function that merges sorted arrays
 * ex
 * mergeSortedArrays([0,3,4,31], [4,6,30]) should return:
 * [0, 3, 4, 4, 30, 31]
 */
function mergeSortedArrays(arr1, arr2) {
  //check input => are parameters arrays?
  if (!(arr1 instanceof Array)) {
    return "first parameter is not Array";
  }
  if (!(arr2 instanceof Array)) {
    return "second parameter is not Array";
  }
  //check input => one of parameters is empty, return the other
  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }
  //input is valid
  const result = arr1.concat(arr2);
  return result.sort((a, b) => {
    return a > b ? 1 : a < b ? -1 : 0;
  });
}

const arr1 = [0, 3, 4, 31];
// const arr1 = "hi";
const arr2 = [4, 6, 30];

console.log(mergeSortedArrays(arr1, arr2));
