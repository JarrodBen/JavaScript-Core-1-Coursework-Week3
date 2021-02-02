/* 
  You are given an statement

  You should remove the word "not" by using .substring() and log the result.

  HINT: You will need to use .substring() twice
*/

let statement = "I do not like programming";

// Method 1 
// declaring two variables and creating two substrings

// Comment line 16 to 21 to test below method

var str1 = statement.substring(0, 4) 
var str2 = statement.substring(8, statement.length);

let result = str1.concat(str2)
console.log(result);

// Method 2
// Uncomment line 26 & 27

// let result = statement.substring(0, 4) + statement.substring(8, statement.length);
// console.log(result);

/* EXPECTED OUTPUT 

  "I do like programming"
  
*/
