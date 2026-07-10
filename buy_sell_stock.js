// Problem
// You are given an array where each element represents the stock price on that day.
// You can:
// Buy once
// Sell once
// You must buy before you sell

// Find the maximum profit.
// If no profit is possible, return 0.

// Example 1
// Input:
// [7,1,5,3,6,4]
// Output:
// 5

function max_profit(arr) {
    let max_profit = 0;
    let min = arr[0];
    let j = 0;
    //in O(n) time- find smallest element first -
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
            j = i;
        }

        if (arr[i] > min) {
            let profit = arr[i] - min;
            if (profit > max_profit) {
                max_profit = profit;
            }
        }
    }

    //using nested loop O(n^2)
    // for(let i=0;i<arr.length;i++){
    //     for(let j=i+1;j<arr.length;j++){
    //         if(arr[j]>arr[i]){
    //             profit=arr[j]-arr[i];
    //             if(profit>max_profit){
    //                 max_profit=profit;
    //             }
    //         }

    //     }
    // }
    return max_profit;
}

let array = [7, 2, 5, 1, 6, 4];
console.log(max_profit(array));