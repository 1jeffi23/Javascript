// Linear Search
// Given an array and a target value, return the index of the target.
// If the target is not present, return -1.
// Example 1
// Input:
// arr = [4, 8, 1, 9, 5]
// target = 9
// Output:
// 3

function target_index(arr,target){

    for(let i=0;i<arr.length;i++){
        if(arr[i]==target){
            return i;
        }
    }
    return -1;
}

let arr = [4, 8, 1, 9, 5];
console.log(target_index(arr,9));