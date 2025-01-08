// Set
// let myArray = [1, 2, 3, 4, 4, 3];
// let obj = new Set(myArray);

// Iteration Methods

// 1. forEach

// obj.forEach((value) => {
//   console.log(value);
// });

// 2. for..of

// for (let value of obj) {
//   console.log(value);
// }

// 3. Converting Set to Array and using array iteration methods

// let copySet = [...obj];

// copySet.forEach((element) => {
//   console.log(element);
// });

// obj.add(1);
// obj.add(8);
// console.log(obj.has(8));
// obj.delete(1);
// obj.clear();
// console.log(obj);

//Map
let map = new Map([
  ["a", "a"],
  ["b", "b"],
]);

// Iteration Methods
// map.forEach((key, value) => {
//   console.log(key, value);
// });

// for (let [key, value] of map) {
//   console.log(key, value);
// }
// map.set("c", "c");
// console.log(map.has("a"));
// console.log(map.get("a"));
// map.delete("c");
// map.clear();
// console.log(map);
