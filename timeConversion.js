var s = '14:45:11PM';

function timeConversion(s){
    var time;
    var n = s.charAt(8);
    var hh = s.charAt(0) + s.charAt(1);
    var mm = s.charAt(3) + s.charAt(4);
    var ss = s.charAt(6) + s.charAt(7);
    if(n == 'A'){
        time = hh + ':' + mm + ':' + ss;
    }
    else if(n == 'P') {
        hh = hh - 12;
        if(hh < 10){
            hh = '0' + hh;
        }
        time = hh + ':' + mm + ':' + ss;    
    }
    console.log(time);
}

timeConversion(s);