/* 
  You are given an statement

  You should remove the word "not" by using .substring() and log the result.

  HINT: You will need to use .substring() twice
*/

let statement = "I do not like programming";


// declaring two variables and creating two substrings
var str1 = statement.substring(0, 4) 
var str2 = statement.substring(8, statement.length);

let result = str1.concat(str2); // concatinating the two substrings to one string.
console.log(result);

/* EXPECTED OUTPUT 

  "I do like programming"
  
*/
