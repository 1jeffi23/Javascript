// Move All Zeroes to the End
// Given an array, move all 0s to the end while keeping the order of the non-zero elements the same.
// Example
// Input:
// [0,1,0,3,12]
// Output:
// [1,3,12,0,0]

function move_zeros_end(arr){
    let j=0;
    for(let i=0; i<arr.length;i++){
        
        if(arr[i]!==0){
            let temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
            j++;
        }
    }
    return arr;
}

let array=[0,1,0,3,12];
console.log(move_zeros_end(array));