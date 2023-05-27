// 1.d. Write a function called `longestIncreasingSubsequence` that takes an array of numbers as input and returns the length of the longest increasing subsequence in the array. A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.
// ```js
// const arr = [1, 4, 2, 5, 3];
// console.log(longestIncreasingSubsequence(arr));

function longestIncreasingSubsequence(arr) {
    let newarr = [];
    let len=arr.length;
    for (let j = 0; j < len; j++) {
        if (j == 0) {
            newarr.push(arr[j]);
        }
        if (arr[j] > arr[j - 1])
            newarr.push(arr[j]);
    }
    return newarr;
}

const arr = [1, 3, 2, 4, 5, 7]; //1,3,2,4,5,7-13457
console.log(longestIncreasingSubsequence(arr));
//arr = [1, 4, 2, 5, 3]; -output - [ 1, 4, 5 ]