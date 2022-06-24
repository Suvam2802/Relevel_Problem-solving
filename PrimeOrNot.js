function PrimeOrNot(n){

for(let i=2; i<37; i++){
    if (n%i==0){
        return false;
    }
    return true;
}
}

console.log(PrimeOrNot(38));