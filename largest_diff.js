// Find the Largest Difference
// Given an array, find the maximum difference between any 
// two elements where the larger element comes after the smaller element.
// Example 1
// Input:
// [7,1,5,4]
// Output:
// 4

// function largest_diff(arr){
//     let max_diff=0;
//     let diff;
//     for(let i=0;i<arr.length;i++){

//         for(let j=0;j<i;j++){          //compare with previous elements
//             if(arr[i]>arr[j]){
//                 diff=arr[i]-arr[j];
//                 if(diff>max_diff){
//                     max_diff=diff;
//                 }
//             }
//         }
       
//     }
//     if(max_diff==0){
//         return -1;
//     }
//     return max_diff;
// }

function largest_diff(arr){
    let j=0;
    let max_diff=0;
    let diff;
    let min=arr[0];
    for(let i=0; i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i]
            j=i;
        }
        if(arr[i]>min && i>j){
            diff=arr[i]-min;
            if(diff>max_diff){
                max_diff=diff;
            }
        }
    }
    if(max_diff==0){
        return -1;
    }
    return {max_diff};
}

let array=[2,5,6,8,1];
console.log(largest_diff(array));