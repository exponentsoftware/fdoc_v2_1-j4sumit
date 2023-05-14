// 2.d. Write a function called `findMaximumSubarray` that takes an array of integers as input and returns the maximum sum of any contiguous subarray within the input array.
// ```js
// const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// console.log(findMaximumSubarray(arr));
// 6 // the maximum sum subarray is [4, -1, 2, 1]

function findMaximumSubarray(arr)
{
let newarr=[];
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i]+arr[i+1]>=0)
        {
            newarr.push(arr[i]);
        }
     
    }
    // let set = new Set(newarr);
    console.log(newarr);


}
const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(findMaximumSubarray(arr));