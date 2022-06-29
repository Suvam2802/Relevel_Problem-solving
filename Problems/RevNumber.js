let n = 45678;
let rev = 0;

while(n>0)
{
    let digit=n%10;
    //console.log(digit);
    rev = rev*10 + digit
    n=Math.floor(n/10);
}
console.log(rev);