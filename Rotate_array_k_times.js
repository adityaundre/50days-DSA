//rotate right by K times

var rotate = function(nums, k) {

    let s= k%nums.length;
   
    nums.unshift(...nums.splice(nums.length-s))
   
    return nums;
   };


   //Brute force for right shift

   function rotateArr(arr, d, n)
    {
        
        for(let i=0;i<d;i++){
            let temp=arr.pop();
            arr.unshift(temp);
            
        }
        return arr;
        
    }