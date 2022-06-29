function isPrime(N) {
    let flag = true;
    //EDGE case
    if(N === 1) {
        return false;
    }

    for(let i = 2; i <= N - 1; i++) {
        if(N % i === 0) {
            flag = false;
        }
    }

    return flag;
}

//Printing ALL prime numbers from 1 to N.
//1 2 3 4 5 ..
const N = 12;
for(let i = 1; i <= N; i++) {
    if(isPrime(i)) {
        console.log(i);
    }
}