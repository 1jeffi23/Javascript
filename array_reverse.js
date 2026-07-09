// Reverse an Array (Without Using reverse())
// Given an array, return the reversed array.
// Example
// Input:
// [1, 2, 3, 4, 5]
// Output:
// [5, 4, 3, 2, 1]

function array_rev(arr){
    let first = 0;
    let last = arr.length-1;
    while(first<last){
            let temp=arr[first];
            arr[first]=arr[last];
            arr[last]=temp;
            first++;
            last--;
    }
    return arr;

}
let array = [1,2,3,4,5];
console.log(array_rev(array));
