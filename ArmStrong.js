let n= 370;
let copy= n;
let sum=0;

while(copy>0)
{
    let digit= copy%10;
    sum+= Math.pow(digit,3);
    copy = Math.floor(copy/10)

}
console.log(sum==n);
