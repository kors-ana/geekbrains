var number = Number(process.argv[2]);
var numberSystem = Number(process.argv[3]);
var requiredNumberSystem = Number(process.argv[4]);


for (var i = 0; i >= 0; i++) {
    if (i.toString(numberSystem) == number) {
        var res = i.toString(requiredNumberSystem);
        console.log(res);
        break;
    } 
} 