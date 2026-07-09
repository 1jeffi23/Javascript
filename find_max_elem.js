// Find Maximum Element
// Given an array of integers, return the largest number.
// Input:
// [3,7,2,9,5]
// Output:
// 9

function findmax(arr) {
      let max=arr[0];
    for (let i = 0; i < arr.length; i++) {
          if(arr[i]>max){
            max=arr[i];
          }
    }
    return max;

}

let array = [3, 7, 2, 9, 5];
console.log(findmax(array));