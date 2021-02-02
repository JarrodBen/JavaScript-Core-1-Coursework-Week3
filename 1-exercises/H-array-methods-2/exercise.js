/*
  Array methods - .slice()
  ------------------------
  The variable `firstFive` should contain the first five items of `everyone`
  The variable `lastFive` should contain the last five items of `everyone`
*/

var everyone = ["Daniel", "Irina", "Rares", "Rukmini", "Abdul", "Austine", "Swathi"];

// telling the slice to start and index number 0 and end at & excluding index number 5
var firstFive = everyone.slice(0, 5); // complete this statement

var lastFive = everyone.slice(2, 7);  // complete this statement
// or everyone.slice(2) in this instance

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */

console.log(firstFive);
console.log(lastFive);

/* 
  EXPECTED RESULT
  ---------------
  ["Daniel", "Irina", "Rares", "Rukmini", "Abdul"]
  ["Rares", "Rukmini", "Abdul", "Austine", "Swathi"]
*/
