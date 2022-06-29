// let N = 20;
// let sum = 0;
// for(let i=0; i<=N; i=i+2)
// {
//     sum += i;    
// }
// console.log(sum);

// Problem - 2B
// Write a program to calculate the sum of digits of a number.
// Example -
// num = 435
// Output -
// 12

let N=45456;
let sum = 0;
while(N>0)
{
    let digit = N%10;
    //console.log(digit);
    sum= sum+digit;
    N = Math.floor(N/10);
}
console.log(sum)