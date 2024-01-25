function searchTarget(N,A,X) {
    let l=0;
    let m=A.length;

 
    while(l<=m){
        let mid=Math.floor((l+m)/2);
        if(A[mid]===X){
            return mid;
        }
        else if(X>A[mid]){
            l=mid+1;
        }
        else {
            m = mid - 1;


    }
}
    return -1
}

//TC=O(logN)