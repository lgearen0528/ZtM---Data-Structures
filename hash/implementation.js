class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  //very basic hash function using character utf encoding charCodeAt
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
  }

  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] == key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        if (this.data[i].length > 1) {
          for (let k = 0; k < this.data[i].length; k++) {
            keysArray.push(this.data[i][k][0]);
          }
        } else {
          keysArray.push(this.data[i][0][0]);
        }
      }
    }
    return keysArray;
  }
}

const myHashTable = new HashTable(3);
myHashTable.set("grapes", 10000);
// console.log(myHashTable);
// console.log(myHashTable.get("grapes"));
myHashTable.set("oranges", 25);
myHashTable.set("apples", 2);
myHashTable.set("cherries", 25);
// console.log(myHashTable);
//
console.log(myHashTable.keys());
// console.log(myHashTable);
// console.log(myHashTable.get("oranges"));
