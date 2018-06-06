var m = { "января": 0, "февраля": 1, "марта": 2, "апреля": 3, "мая": 4, "июня": 5, "июля": 6, "августа": 7, "сентября": 8, "октября": 9, "ноября": 10, "декабря": 11 };

var day = process.argv[2];
var month = m[process.argv[3]];
var year = process.argv[4];

function howMuch(day, month, year) {
    var newYearDate = new Date(year, 11, 31);
    var nowDate = new Date(year, month, day);
    var res = String((newYearDate - nowDate) / 86400000);
    return res;
}
    
process.stdout.write(howMuch(day, month, year));
