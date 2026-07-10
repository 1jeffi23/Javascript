// Longest Consecutive Increasing Sequence
// Given an array, find the length of the longest consecutive increasing sequence.

// Example 1
// Input:
// [1,2,3,1,2,3,4,1]
// Output:
// 4

function longest_inc_seq(arr) {
    let count = 1;
    let lon_seq = 1;
    for (let i = 0; i < arr.length-1; i++) {
        if (arr[i + 1] === arr[i] + 1) {
            count++;
        }
        else {
            count=1;
        }

        if (count > lon_seq) {
            lon_seq = count;
        }


    }
    return lon_seq;
}
let array = [3,5,9];
console.log(longest_inc_seq(array));