// 1.c. Write a function called `sumOfPrimes` that takes a number as input and returns the sum of all prime numbers less than or equal to the input number.
// ```js
// console.log(sumOfPrimes(10));
// 17 // 2 + 3 + 5 + 7 = 17

function checkingPrimeNum(num)
{
for(let i=2;i<num;i++)
{
    if(num%i===0)
    {
        return false;
    }
}
return true;  // will return only if passed number is not divisible by digit (2 to number-1)
}

function sumOfPrimes(number)
{
    let sum=0;
    for(let i=2;i<=number;i++)
    {
        if(checkingPrimeNum(i))// here we are calling checingPrimNum function to check each number is prime or not
        {
            sum=sum+i;
        }
    }
    return sum;
}

console.log(sumOfPrimes(10));
