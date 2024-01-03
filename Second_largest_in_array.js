class Solution{
    print2largest(arr,n){
        let arr1=arr.sort();
        let first_large=arr1[0];
        for(let i=0;i<arr.length;i++){
            if(arr[i]>first_large){
                first_large=arr[i];
            }
            
        }
        let sec_large=arr1[0];
        for(let i=0;i<arr.length;i++){
            if(arr[i]>sec_large && arr[i]<first_large){
                sec_large=arr[i]
            }
        }
        return sec_large;
    }
    
}
