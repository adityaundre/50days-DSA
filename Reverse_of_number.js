function reverseNum(n) {
    let rev=0;   //if 123 then (0*10)+1=1, (1*10)+2=12, (12*10)+3=123  123%10=3, 1234%10 etc
    while(n!=0){
        let m=Math.floor(n%10); //this will give us last digit
        rev=(rev*10)+m         //used above formula
        n=Math.floor(n/10);   //e.g 123/10=12  then m=12%10
    }
    return rev
}