function SumofOdd(N)
{
    let sum = 0;
    for(i=1;i<=N; i= i+2)
    {
         sum = sum+i;
    }
    return sum;
}
console.log(SumofOdd(10))