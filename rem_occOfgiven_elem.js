// Remove All Occurrences of a Given Element
// Given an array and a value val, remove all occurrences of val in-place and return the new length.
// Example:
// Input:
// arr = [3,2,2,3]
// val = 3
// Output:
// 2
// Array becomes:
// [2,2,_,_]

function remove_gibenElem_occ(arr,val){
    let j=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==val){
            arr[j]=arr[i];
            j++;
        }
    }
   return arr.slice(0,j);
}

let arr = [3,2,2,3];
console.log(remove_gibenElem_occ(arr,3));