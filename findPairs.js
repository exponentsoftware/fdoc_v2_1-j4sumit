// 2.a. Write a function called `findPairs` that takes an array of integers and a number as input and returns an array of all pairs of integers in the input array whose sum is equal to the input number.
// ```js
// const arr = [3, 4, 6, 8, 1, 2, 9];
// console.log(findPairs(arr, 10));
// [[3, 7], [4, 6], [8, 2], [1, 9]]

function findPairs(arr, num)
{
let newarr=[];

for(let i=0; i<arr.length; i++)
{
     for(j=i+1; j<arr.length; j++)
    {
        if(arr[i] + arr[j] === num)
        {

     newarr.push([arr[i],arr[j]])

        }
     }   
}
return newarr;
}
const arr = [3, 4, 6, 8, 1, 2, 9];
console.log(findPairs(arr, 10));
