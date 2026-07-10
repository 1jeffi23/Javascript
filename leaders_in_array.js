// Leaders in an Array
// A leader is an element that is greater than all the elements to its right.
// Return all leaders.

// Example 1
// Input:
// [16,17,4,3,5,2]
// Output:
// [17,5,2]

//in O(n) time
// function leaders(arr){
//     let max=arr[0];
//     for(let i=0; i<arr.length; i++){
//             if(arr[i]>max){
//                 max=arr[i];
//             }      
//     }
//     return max;
// }

//O(n^2)
function leaders(arr) {
    let lead = [];

    for (let i = 0; i < arr.length; i++) {
        // let max=arr[i];
        let islead = true;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] > arr[i]) {
                // arr[j]=max;
                islead = false;
                break;
            }
        }

        if (islead == true) {
            lead.push(arr[i]);
        }
        // if(max==arr[i]){
        //     lead.push(max)

        // }


    }
    return lead;
}

let array = [16, 17, 4, 3, 5, 2];
console.log(leaders(array));