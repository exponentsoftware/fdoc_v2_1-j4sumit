// 2.c. Write a function called `findNthLargest` that takes an array of numbers and a number n as input and returns the nth largest number in the array.
// ```js
// const arr = [3, 1, 7, 4, 5];
// console.log(findNthLargest(arr, 3));

function findNthLargest(arr, num)
{
let sortedarray =arr.sort((a,b) => a-b);

return sortedarray[sortedarray.length-num];

}

const arr = [3, 1, 7, 4, 5];
console.log(findNthLargest(arr, 3));
