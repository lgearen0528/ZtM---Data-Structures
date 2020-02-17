/*
Given 2 arrays, create a function that let's a user know whether the 2 arrays contain any common items
Will return true or false

ex:
array1 = ['a', 'b', 'c', 'x']
array2 = ['z', 'y', 'i']
will return false

array1 = ['a', 'b', 'c', 'x']
array2 = ['z', 'y', 'x']
will return true
*/

//Interviewing thought process
//2 parameters -> arrays -> no size limit
//true or false
//size of array? is time or space more important? -> what's the most efficient?
//brute force => nested loops, bad -> O(n^2)

// const array1 = ["a", "b", "c", "x"];
// const array2 = ["z", "y", "x"];

//brute force coded
// function containsCommonItem(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// }
//O(a*b)

const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "d"];
/* 
array1 into obj
obj{
    a:true,
    b:true,
    c:true,
    x:true
}

array2[index] === obj.properties

convert array into object and now i only loop twice, not nested, improves time complexity
*/

function containsCommonItem2(arr1, arr2) {
  //loop through first array and create object where props === items in the array
  let tracker = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!tracker[arr1[i]]) {
      const item = arr1[i];
      tracker[item] = true;
    }
  }
  //loop through second array and check if item in second array exists on created object
  for (let i = 0; i < arr2.length; i++) {
    if (tracker[arr2[i]]) {
      return true;
    }
  }
  return false;
}
//O(a+b) Time
//O(a) Space Complexity
console.log(containsCommonItem2(array1, array2));

/*
    to improve -> google javascript specific array methods to make more efficient
    ex.*/
function containsCommonItem3(arr1, arr2) {
  return arr1.some(item => arr2.includes(item));
}
