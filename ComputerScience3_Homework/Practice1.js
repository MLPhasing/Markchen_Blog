function checkIsPrime(n, r, isFirst){
    if (isFirst){n += 1;}
    if (r == Math.ceil(Math.sqrt(n)) + 1){return n;}
    if (n%r == 0){return checkIsPrime(n + 1, 2, false);}
    else{return checkIsPrime(n, r+1, false)}
}

console.log(checkIsPrime(10989, 2, true));