// main.js
import { LinkedList } from './linkedList.mjs';

const list = new LinkedList();

// Populate the list
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());

console.log("\nList size:", list.size);
console.log("Head value:", list.head.value);
console.log("Tail value:", list.tail.value);
console.log("Node at index 2:", list.at(2).value);
console.log("Contains 'snake':", list.contains("snake"));
console.log("Index of 'parrot':", list.find("parrot"));

list.insertAt("lizard", 3);
console.log("\nAfter inserting 'lizard' at index 3:");
console.log(list.toString());

list.removeAt(4);
console.log("\nAfter removing node at index 4:");
console.log(list.toString());