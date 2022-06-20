var arr = [8,2,3,4,5];

function minMaxSum(arr){
    var min=10000000000;
    var max=0;
    var allSum=0;
    for(var i=0; i < 5; i++){
        allSum += arr[i];
        if (arr[i] < min){
            min=arr[i];
        }
        if (arr[i] > max){
            max=arr[i];
        }    
    }
    var minSum = allSum - max;
    var maxSum = allSum - min;
    console.log(minSum + "\n" + maxSum);
}

minMaxSum(arr);