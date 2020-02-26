/**
 * Given an array = [2,5,1,2,3,5,1,2,4]
 *  should return 2
 *
 * given an array = [2, 1, 1, 2, 3, 5, 1, 2,4]
 *  should return 1
 *
 * given and array = [2,3, 4, 5]
 */
function firstRecurringCharacter(array) {
  const obj = {};

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (!obj[item]) {
      obj[item] = i;
    } else {
      return item;
    }
  }

  return undefined;
} // O(n) time and space complexity
let array = [2, 1, 1, 2, 3, 5, 1, 2, 4];
console.log(firstRecurringCharacter(array));
