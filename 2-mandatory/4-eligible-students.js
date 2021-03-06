/*
  Only students who have attended enough classes are eligible to sit an exam.

  Create a function which:
  - Accepts an array which contains all the students' names and their attendance counts
    (see tests to confirm how this data will be structured)
  - Returns an array containing only the names of the who have attended AT LEAST 8 classes
*/

main
function eligibleStudents(studentNames) {
    var eligibleStudents = studentNames = studentNames.filter(student => student[1] >= 8).map (student => student[0]);
    // this will filter the below array to find students that has attended 8 or classes and will list the name in the array
    return eligibleStudents; 
function getEligibleStudents() {

 main
}

/* ======= TESTS - DO NOT MODIFY ===== */

const attendances = [
  ["Ahmed", 8],
  ["Clement", 10],
  ["Elamin", 6],
  ["Adam", 7],
  ["Tayoa", 11],
  ["Nina", 10]
]

const util = require('util');

function test(test_name, actual, expected) {
    let status;
    if (util.isDeepStrictEqual(actual, expected)) {
        status = "PASSED";
    } else {
        status = `FAILED: expected: ${util.inspect(expected)} but your function returned: ${util.inspect(actual)}`;
    }

    console.log(`${test_name}: ${status}`);
}

test("getEligibleStudents function works",
  getEligibleStudents(attendances),
  ["Ahmed", "Clement", "Tayoa", "Nina"]
);
