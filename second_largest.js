// Find the Second Largest Element
// Given an array, return the second largest distinct element.
// Example 1
// Input:
// [3, 7, 2, 9, 5]
// Output:
// 7

//using two pointer approach

function secondLargest(arr) {
    let firstl = arr[0];
    let scndl = -Infinity; /*-Infinity means smaller than every possible number.
    The second largest should not be initialized to the first element.
     Instead, initialize it with the smallest possible value.
     [5, 5, 4, 4, 3]  like in thiis case if scndl=arr[0] the in output value of firstl and scndl will be same */

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > firstl) {
            scndl = firstl;
            firstl = arr[i];
        }
        else if (arr[i] < firstl && arr[i] > scndl) {
            scndl = arr[i];
        }

    }

    return scndl;
}

let array = [10, 20, 30, 40];
console.log(secondLargest(array));
let arr= [5, 5, 4, 4, 3];
console.log(secondLargest(arr));