/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here

var names = [
  "Rakesh",
  "Antonio",
  "Alexandra",
  "Andronicus",
  "Annam",
  "Mikey",
  "Anastasia",
  "Karim",
  "Ahmed",
];

var longer7StartsWithA = names.find(longerSevenStartsA => longerSevenStartsA[0] === "A" && longerSevenStartsA.length > 7)

// simply put, it will find a name that is longer than 7 characters and starts with the letter A

console.log(longer7StartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"
