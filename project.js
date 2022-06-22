var arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
function diagonalDifference(arr){
    var m=0;
    var q=0;
    var n=0;
    var k = arr.length
    for(var i = 0; i < k; i++){
        n+=arr[i][i];
    }
    for(var i = 0, j=k-1; i < k, j >=0; i++, j--){
        m+=arr[i][j];
    }
    if(m-n < 0){
        q = n-m;    
    }
    else{
        q = m-n;
    }

    console.log(q)
}

diagonalDifference(arr)