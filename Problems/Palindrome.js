let m =223322;
let n = m;
let rev = 0;

while(n>0){
    let digit = n%10;
    rev = rev*10 + digit;
    n=Math.floor(n/10);
    
}
console.log(rev==m);