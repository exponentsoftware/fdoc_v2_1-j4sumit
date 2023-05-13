// 2.b. Write a function called `findMissingNumber` that takes an array of integers from 1 to n with one number missing and returns the missing number.
// ```js
// const arr = [1, 2, 3, 5, 6, 7, 8, 9, 10];
// console.log(findMissingNumber(arr));

function findMissingNumber(arr)
{
    let newarr=[];
for(let i=0; i<arr.length-1; i++)
{
    if(arr[i+1]-arr[i]!==1)
    {
        newarr.push(arr[i]+1)
    }
}
return newarr;
}

const arr = [1, 2, 3, 5, 6, 7, 8, 9, 10];
console.log(findMissingNumber(arr));