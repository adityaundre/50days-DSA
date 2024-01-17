function factorialBasic(n) {
    let result=1;    //initialised result to 1

    for(let i=1;i<=n;i++) {

        result=result*i    // res=1*1 , res=1*2, res=2*3, res=6*4
    }
    return result;
}

 

//using recursion

function fact(n){

if(n===0){
    return 1
}
return n*fact(n-1)


}