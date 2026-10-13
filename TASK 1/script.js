/* Task 1: Typed Variable Logger with Arithmetic */

// 1. String variable using let
let studentName = "Web Tech Student";

// 2. Number variable using const
const courseNumber = 6;

// 3. Boolean variable using let
let isPresent = true;

// 4. Array containing four numbers using const
const scores = [80, 90, 75, 85];

// 5. Object containing three properties using const
const student = {
    name: "Web Tech Student",
    course: "Web Technology",
    semester: 6
};

// Calculate the average using +, / and .length
const avgScore =
    (scores[0] + scores[1] + scores[2] + scores[3])
    / scores.length;

// Display all variables in the console
console.log("Student Name:", studentName);
console.log("Course Number:", courseNumber);
console.log("Attendance Status:", isPresent);
console.log("Scores Array:", scores);
console.log("Student Object:", student);
console.log("Average Score:", avgScore);
