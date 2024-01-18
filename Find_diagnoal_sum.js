function diagonalSumII(mat) {
    let n=mat.length;
    let sum=0;
    for(let i=0;i<n;i++){
        sum=sum+mat[i][i] //sum of primary dignoal elements [0,0] [1,1] [2,2]

        if(mat[i]!=mat[n-1-i]) // condition for secondary dignoal not part of 1st diagonal i.e [1][1] to calculate only once
        {

        sum=sum+mat[i][n-1-i]  //sum of 2nd diag  i+j=n-1   j=n-1-i
        }
    }
    return sum;

}

//To calculate primary and secondary diagonal sum separately

function sumOfDiagonals(matrix) {
    const len = matrix.length;
    let diagonalSum = 0;
    let counterDiagonalSum = 0;
    for (let i = 0; i < len; i++) {
      diagonalSum += matrix[i][i];
      counterDiagonalSum += matrix[i][len - i - 1];
    }
  console.log(diagonalSum)
  console.log(counterDiagonalSum)
}