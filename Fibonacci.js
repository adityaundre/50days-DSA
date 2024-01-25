function nthFibonacciNumber(n) {
    if (n === 0) {
           return 0;
       } else if (n === 1) {
           return 1;
       }
   
       let a = 0;
       let b = 1;
       let result;
   
       for (let i = 2; i <= n; i++) {
           result = a + b;
           a = b;
           b = result;
       }
   
       return result;
   }

   //Using recursion
   function fib(n){
    if(n==0){
        return 0
    }
    if(n==1){
        return 1
    }
    return fib(n-1)+fib(n-2)
}