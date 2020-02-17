// const nemo = ["nemo"];
// const everyone = [
//   "dory",
//   "pork",
//   "bruce",
//   "missy",
//   "liem",
//   "nemo",
//   "thomas",
//   "dylan",
//   "jeff",
//   "sue"
// ];
// let large = new Array(100).fill("nemo");

// function findNemo(array) {
//   let t0 = Date.now();
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === "nemo") {
//       console.log("found it");
//     }
//   }
//   let t1 = Date.now();
//   console.log("Call to find Nemo took " + (t1 - t0) + " milliseconds");
// }
// findNemo(nemo);
// findNemo(everyone)
// findNemo(large);

// const boxes = [0, 1, 2, 3, 4, 5];

// function logFirstTwoBoxes(boxes) {
//   console.log(boxes[0]);
//   console.log(boxes[1]);
// }

// logFirstTwoBoxes(boxes);

//log all pairs of array
//ex 1,1 1,2 1,3 1,4, 1,5
//   2,1 2,2 etc
const boxes = [1, 2, 3, 4, 5];
// const logAllPairsOfArray = array => {
//    for (let first = 0; first < array.length; first++) {
//      for (let second = 0; second < array.length; second++) {
//        console.log(`${array[first]},${array[second]} `);
//      }//O(n^2)
//    }

// };
// logAllPairsOfArray(boxes);

//OR

const logAllPairsOfArray = boxes => {
  boxes.forEach(firstBox => {
    boxes.forEach(secondBox => {
      console.log(firstBox + "," + secondBox);
    });
  });
};
logAllPairsOfArray(boxes);
