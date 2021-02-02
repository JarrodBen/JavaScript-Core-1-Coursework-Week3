/* 
  You are given an statement

  You should remove the word "not" by using .substring() and log the result.

  HINT: You will need to use .substring() twice
*/

let statement = "I do not like programming";

var str1 = statement.substring(0, 4)
var str2 = statement.substring(8, statement.length);

let result = str1.concat(str2);
console.log(result);

// let dessert = "ice cream and pancakes";
// let newDessert = dessert.substring(0, 9);
// console.log(newDessert);

/* EXPECTED OUTPUT 

  "I do like programming"
  
*/
