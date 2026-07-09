// Count Positive, Negative, and Zero
// Given an array, count:
// Positive numbers
// Negative numbers
// Zeroes
// Example
// Input:
// [-2, 5, 0, -7, 3, 0, 9]
// Output:
// Positive = 3
// Negative = 2
// Zero = 2

function count_pnz(arr){
    let positive =0;
    let neg=0;
    let zero=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>0){
            positive++;
        }
        else if(arr[i]==0){
            zero++;
        }
        else if(arr[i]<0){
            neg++;
        }
    }

    return {positive,neg,zero};

}

let array=[-2, 5, 0, -7, 3, 0, 9];
console.log(count_pnz(array));