// Product of Array Except Self (Brute Force Only)
// Given an array, return a new array where each element is the product of all other elements except itself.

// Example 1
// Input:
// [1,2,3,4]
// Output:
// [24,12,8,6]

function productArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let prod = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        prod *= arr[j];
      }
    }
    result.push(prod);
  }
  return result;
}
let array = [1, 2, 3, 4];
console.log(productArray(array));
