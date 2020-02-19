let user = {
  age: 54,
  name: "Bob",
  magic: true,
  scream: function() {
    console.log("ahhh");
  }
};

console.log(user.age);
user.spell = "abra kadabra";
console.log(user);
user.scream();
//all these are O(1) time complexity
//if collisions happen, can slow down reading and writing to O(n/k) k=size of hash table
//to deal with collisions, linkedlists are used (called "separate chaining")
//can also use other structures as well (but uncommmon)
