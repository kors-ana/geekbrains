var num1 = Number(process.argv[1]);
var num2 = Number(process.argv[2]);
var hours = 0;
var min = 0;
var sec = 0;
var sum = num1 + num2;

if (num1 >=1 && num1 <= 100000 && num2 >=1 && num2 <=100000) {
       if (sum < 60) {
       sec = sum;
        if (sec % 10 == 1) {
                sec = sec + ' секунда';
            } else if (sec % 10 == 2 || sec % 10 == 3 || sec % 10 == 4) {
                sec = sec + ' секунды';
            } else {
                sec = sec + ' секунд';
            }
        process.stdout.write(sec);
    }

    if (60 <= sum && sum < 3600) {
        min = Math.floor(sum / 60);
        sec = sum - (min * 60);
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
        process.stdout.write(min, sec);
    }

    if (3600 <= sum) {
        hours = Math.floor(sum / 3600);
        min = sum - (hours * 3600);
        if (min > 60) {
            sum = min;
            min = Math.floor(min / 60);
            sec = sum - (min * 60);

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
            process.stdout.write(hours, min, sec);
        }  
    }
} else {
     throw new Error('Range error')
};