var s = '12:45:54PM';

function timeConversion(s){
    var time;
    var n = s.charAt(8);
    var hh = s.charAt(0) + s.charAt(1);
    var mm = s.charAt(3) + s.charAt(4);
    var ss = s.charAt(6) + s.charAt(7);
    if(n == 'A'){
        if (hh == '12'){
            hh = '00';
        }

        time = hh + ':' + mm + ':' + ss;
    }
    else if(n == 'P') {
        /*if(s.charAt(0) == '0' ){
            hh = parseInt(hh);  
        }*/ 
        hh = parseInt(hh);
        hh += 12;
        if(hh == 24){
        //   hh = parseInt(hh); 
            hh -= 12;
        }
  
        time = hh + ':' + mm + ':' + ss;    
    }
    console.log(time);
    return time;
    
}

timeConversion(s);