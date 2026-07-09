// Count Even and Odd Numbers
// Given an array of integers, return how many even numbers and how many odd numbers it contains.
// Example 1
// Input:
// [1, 2, 3, 4, 5, 6]
// Output:
// Even = 3
// Odd = 3

function count_even_odd(arr){
    let even=0;
    let odd=0;
     for(let i=0; i<arr.length;i++){
            if(arr[i]%2==0){
                even++
            }
            else{
                odd++;
            }
     }
     return {even,odd};

}

let array = [1, 2, 3, 4, 5, 7];
console.log(count_even_odd(array));