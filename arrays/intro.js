const strings = ["a", "b", "c", "d"];
//4 items * 4 indices used = 16 bytes used of memory

//to access an item, indicate with the index (zero based) in [] brackets
//ex. grab 3rd item -> strings[2]
//access O(1), just grabbing data at specific element
console.log(strings[2]);

//METHODS
//push (insertion)
strings.push("e"); //O(1), adding item at end of data structure

//pop (delete)
strings.pop(); //removes 'e'
strings.pop(); //removes 'd'
//O(1) removing last item

//unshift (insert at beginning)
strings.unshift("x");
//O(n), inserting new element at 0, and have to iterate elements to reassign the rest of  the indices

//splice (insert at specific index)
strings.splice(2, 0, "hello");
//O(n), insert new element at specific index, iterate remaining of array and reassign indices

console.log(strings);
