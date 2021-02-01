// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)



function timesNum100(numbers) {
    return numbers * 100
}

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
var numbersTimes100 = numbers.map(timesNum100);

console.log(numbersTimes100);
