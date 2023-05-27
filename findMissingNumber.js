// 2.b. Write a function called `findMissingNumber` that takes an array of integers from 1 to n with one number missing and returns the missing number.
// ```js
// const arr = [1, 2, 3, 5, 6, 7, 8, 9,10];
// console.log(findMissingNumber(arr));

// function findMissingNumber(arr)
// {
 
//     let newarr=[];
// for(let i=1; i<=arr.length+1; i++)
// {
// if(arr.includes(i)== false)
// { 
//     newarr.push(i);
// }
// }
// return newarr;
// }

// const arr = [1, 2, 3, 5, 6 , 9, 10];
// console.log(findMissingNumber(arr));

// by using sorting;

function findMissingNumber(arr)
{
    let maxele = Math.max(...arr);
    const sortedarr= new Set(arr);    
    let newarr=[];
for(let i=1; i<=maxele; i++)
{
if(!sortedarr.has(i))
{ 
    newarr.push(i);
}
}
return newarr;
}

const arr = [1, 2,18, 3, 5,12, 6 , 9, 10];
console.log(findMissingNumber(arr));
