// Count Occurrences of a Target
// Given an array and a target value, count how many times the target appears.
// Example 1
// Input:
// arr = [1,2,3,2,4,2,5]
// target = 2
// Output:
// 3

function target_occ(arr,target){
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]==target){
            count++;
        }
    }
    return count;
}

arr = [1,2,3,2,4,2,5];
console.log(target_occ(arr,2));