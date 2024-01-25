//Find the kth smallest element in an unsorted array. Note that it is the kth smallest element in the sorted order, not the kth distinct element.



function kthSmallestElementInAnArray(nums, k) {
    nums.sort((a,b)=>a-b)
    return nums[k-1]
  }
  