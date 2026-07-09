// Find the Missing Number (Very Common)
// Given an array containing numbers from 0 to n, one number is missing.

// Find the missing number.

// Example 1
// Input:
// [3,0,1]

// Output:
// 2

function missing_num(arr,n){
    let arr_sum=0;
    let n_sum= n*(n+1)/2;
    for(let i of arr){
        arr_sum += i;
    }
   
    let missing= n_sum-arr_sum;
    return missing;

}

let arr=[3,0,1,5,2];
let n=arr.length;
console.log(missing_num(arr,n))

