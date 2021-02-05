// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)


var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

function timesNum100(numbers) {
    return numbers * 100 // function will take a number and multiply it by 100 
}
let numbers1 = numbers.map(timesNum100); // Method 1 will call the "timesNum100" function and use it to multiply each number by 100.



let numbers2 = numbers.map(function (numbers) { // Method 2 will refer to the function but not to it's name as it is just being used in this code as is.
    return numbers * 100; 
}); 


let numbers3 = numbers.map((number) => number *100); // Method 3 will use arrow notation to refer to the declared function.

console.log(numbers1);
console.log(numbers2);
console.log(numbers3);
