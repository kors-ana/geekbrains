var number = process.argv[2];
var numberSystem = Number(process.argv[3]);
var requiredNumberSystem = Number(process.argv[4]);

function convertNumbers(number, numberSystem, requiredNumberSystem) {
    var res = 0;
    if (numberSystem == 2) {
        for (var i = 0; i >= 0; i++) {
            if (i.toString(numberSystem) == number) {
            res = i.toString(requiredNumberSystem);
            }
        }
    } else {
        res = parseInt(number, numberSystem);
        res = res.toString(requiredNumberSystem);
    }

    return res;
}

console.log(convertNumbers(number, numberSystem, requiredNumberSystem));