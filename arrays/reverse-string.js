/*
Create a function that reverses a string:
"Hi! My name is Liem" should be:
"meiL si eman yM !iH"
*/

function reverse(str) {
  //check input first
  if (!str || str.length < 2 || typeof str !== "string") {
    return "Check your input";
  }
  let backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  return backwards.join("");
}

function reverse2(str) {
  //assume input is correct
  return str
    .split("")
    .reverse()
    .join("");
}

const reverse3 = str =>
  str
    .split("")
    .reverse()
    .join("");

const reverse4 = str => [...str].reverse().join("");

console.log(reverse4("Hi! My name is Liem"));
