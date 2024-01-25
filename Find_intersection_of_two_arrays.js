function intersectionOfTwoArrays(nums1,nums2) {
    let ans=[];
   
    for(let i=0;i<nums1.length;i++){
        for(let j=0;j<nums2.length;j++)
        if(nums1[i]===nums2[j]){
            ans.push(nums1[i]);
            
        }
   
   
    }
   
    let result= new Set([...ans])
    return result
    
   
   
   }