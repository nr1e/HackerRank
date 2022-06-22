var arr = [1,2,3,4,3,2,1]

function lonelyInteger(arr){
    var arr1 = [];
    var n = arr.length;
    var k = 0;
    for(var i = 0; i < n; i++){
        arr1[i]=0;    
    }
    for(var i = 0; i < n; i++){
        for(var j = 0; j < n ; j++){
            if(arr[i]==arr[j]){
                arr1[i]++;
            }      
        }        
    }
    for(var i = 0; i < n; i++){
        if(arr1[i]==1){
            k = arr[i];    
        }   
    }
    console.log(k)
}

lonelyInteger(arr);