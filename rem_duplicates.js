// Remove Duplicates from a Sorted Array
// Given a sorted array, remove the duplicates in-place.
// // Return the number of unique elements.
// // Note: The first k elements of the array should contain the unique values.
// // Example 1
// // Input:
// // [1,1,2]
// // Output:
// // 2
// // Array becomes:
// // [1,2,_]

function remove_duplicates(arr){
    let j=0;
    for(let i=1;i<arr.length;i++){
        if(arr[i]!==arr[i-1]){
            j++;
            arr[j]=arr[i];
        }
    }
    
    return {
        count: j+1,
        array: arr
    };
}

let array=[1,1,1,2,2,2,3,3,4,5];
console.log(remove_duplicates(array));