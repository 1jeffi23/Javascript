// Find the Sum of All Elements
// Given an array of integers, return the sum of all elements.
// Example 1
// Input:
// [1, 2, 3, 4, 5]
// Output:
// 15

function find_sum_avg(arr){
    let sum=0;
    let avg=0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
    }
    avg=sum/arr.length;
    return {sum,avg};
}

let array=[1, 2, 3, 4, 5];
console.log(find_sum_avg(array));
