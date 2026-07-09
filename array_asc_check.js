// Check if an Array is Sorted (Ascending)
// Given an array, return true if it is sorted in ascending order, otherwise return false.
// Example 1
// Input:
// [1,2,3,4,5]
// Output:
// true

function array_asc_check(arr) {

    for (i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
            break;    //The moment you find: 5 > 3 you already know the answer is false. 
            // so terminate the loop There's no need to keep checking the remaining elements.
        }
    }
    return true;
}

let array = [1,2,5,3,4];
console.log(array_check(array));