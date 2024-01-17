function numberOfPrimesInARange(l, r) {
    let count=0;
    for(let i=Math.max(2,l);i<=r;i++){ //taking max between 2 values. If the range is 1-5 then it will start from 2. If range is 33-75 then will start from 33.
        if(isPrime(i)){
            count++;
        }
    }
    return count;

}