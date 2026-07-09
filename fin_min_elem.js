// Find Minimum Element
// Given an array of integers, return the smallest element.
// Example 1
// Input:
// [8, 3, 12, 1, 6]
// Output:
// 1


function minimum_elem(arr){
    let min=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i];
        }

    }
      return min;
}

let array = [3, 7, 2, 9, 5];
console.log(minimum_elem(array));