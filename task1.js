var number = Number(process.argv[1]);
var numberSystem = Number(process.argv[2]);
var requiredNumberSystem = Number(process.argv[3]);

if (number >=0 && number <= 10000 && numberSystem >=2 && requiredNumberSystem <= 36) {
    for (var i = 0; i >= 0; i++) {
        if (i.toString(numberSystem) == number) {
            var res = i.toString(requiredNumberSystem);
            res = String(res);
            process.stdout.write(res);
            break;
        } 
    }
} else {
    throw new Error ('Range Error');
}
 