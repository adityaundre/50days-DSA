function removeDuplicatesFromSortedArray(nums) {
    let arr=new Set(nums);  //Set is object removes deuplicate
    let count=[...arr]   //converted set to array
   return count.length;
  
  }