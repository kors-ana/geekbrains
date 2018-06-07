var num1 = Number(process.argv[2]);
var num2 = Number(process.argv[3]);

    function getTimeSum(num1, num2) {
        
        var sum = num1 + num2;
        var d = new Date();
        d.setHours(0);
        d.setMinutes(0);
        d.setSeconds(sum);
        var hours = d.getHours();
        var min = d.getMinutes();
        var sec = d.getSeconds();
        var time = hours + ' ' + min + ' ' + sec;

        if (hours % 10 == 1) {
            hours = hours + ' час';
        } else if (hours % 10 == 2 || hours % 10 == 3 || hours % 10 == 4) {
            hours = hours + ' часа';
        } else {
            hours = hours + ' часов';
        }

        if (min % 10 == 1) {
            min = min + ' минута';
        } else if (min % 10 == 2 || min % 10 == 3 || min % 10 == 4) {
            min = min + ' минуты';
        } else {
            min = min + ' минут';
        }

        if (sec % 10 == 1) {
            sec = sec + ' секунда';
        } else if (sec % 10 == 2 || sec % 10 == 3 || sec % 10 == 4) {
            sec = sec + ' секунды';
        } else {
            sec = sec + ' секунд';
        }

        if (hours == "0 часов") {
            time = min + ' ' + sec;
        } 
        if (min == "0 минут") {
            time = hours + ' ' + sec;
        }
        if (sec == "0 секунд") {
            time = hours + ' ' + min;
        }
        if (hours == "0 часов" && min == "0 минут") {
            time = sec;
        }
        if (hours == "0 часов" && sec == "0 секунд") {
            time = min;
        }
        if (min == "0 минут" && sec == "0 секунд") {
            time = hours;
        } 
        if (min != "0 минут" & min != "0 минут" && sec != "0 секунд") {
            time = hours + ' ' + min + ' ' + sec;
        }

        return time;
    }
    
    console.log(getTimeSum(num1, num2));