// Find the Single Number
// Every element appears twice except one element.
// Find that unique element.
// Example 1
// Input:
// [2,2,1]
// Output:
// 1

function single_frequency(arr){
    
    for(let i=0;i<arr.length;i++){
        let count=0;
        for(let j=0;j<arr.length;j++){
            if(i!==j){               //if( i!==j && arr[i]==arr[j])  better to use then multiple if 
                if(arr[i]==arr[j]){
                    count++;
                }
            }
        }
        if(count==0){
            return arr[i];
        }
 
    }

}


console.log(single_frequency([2,2,1,3,1]))