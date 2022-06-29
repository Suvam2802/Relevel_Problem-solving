let N = 100;
let copy =N;

for(let i = 1;i<=N; i++)
{
    let rev = 0;
    while(copy>0){
        let digit= copy%10;
        rev = rev*10+digit
        copy= Math.floor(copy/10);
    }
    //return rev==N;

    if(rev==N){
        console.log(i);
    }


}
