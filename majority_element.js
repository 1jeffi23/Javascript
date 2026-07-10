// Find the Majority Element
// A majority element is an element that appears more than n/2 times in the array.
// If no majority element exists, return -1.

// Example 1
// Input:
// [3,2,3]
// Output:
// 3


function majority_element(arr) {
    let n = arr.length;
    for (let i = 0; i < arr.length; i++) {
        let count = 1;
        for (let j = 0; j < arr.length; j++) {
            if (i !== j && arr[i] == arr[j]) {
                count++;
            }
        }
        if (count > n / 2) {
            return arr[i];
        }

    }

    return -1;
}
let array = [2, 2, 2, 1, 3];
console.log(majority_element(array));