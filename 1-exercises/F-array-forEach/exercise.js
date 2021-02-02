/* 
  Using .forEach() print the numbers 1 to 15, with some exceptions:
  - For multiples of 3 print “Fizz” instead of the number 
  - For the multiples of 5 print “Buzz”. 
  - For numbers which are multiples of both 3 and 5 print “FizzBuzz”

  An array with numbers 1-15 has been provided.
*/

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  function findMultiple3And5(num){
    if (num % 3 === 0 && num % 5 === 0){ // checks if there are any numbers that are both the multiple of 3 & 5

      console.log("FizzBuzz"); // logs FizzBuzz if any number matches the criteria above
    } 
    
    else if (num % 5 === 0) { // checks if there are any numbers that is a multiple of 5
      console.log("Buzz") // log Fizz if any numbers meet the criteria just above this line
    } 
    
    else if (num % 3 === 0) { // checks if there are any numbers that is a multiple of 3
      console.log("Fizz") //log Buzz if any numbers meet the criteria just above this line
    } 
    
    else {
      console.log(num); // will log the number as normal if does not meet any of the criteria above.
    }
  }

arr.forEach(findMultiple3And5);

/* EXPECTED OUTPUT */

/*
1
2
'Fizz'
4
'Buzz'
'Fizz'
7
8
'Fizz'
'Buzz'
11
'Fizz'
13
14
'FizzBuzz'
*/
