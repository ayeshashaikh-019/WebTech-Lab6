
/* Task 4: Full Grade Calculator with Dynamic Styling */

// Select HTML elements
const scoreInput = document.getElementById("scoreInput");
const calculateButton = document.getElementById("calculateButton");
const gradeResult = document.getElementById("gradeResult");

// Run the calculator when the button is clicked
calculateButton.addEventListener("click", function () {

    // Read the score from the input field
    const score = Number(scoreInput.value);

    // Validate the input
    if (
        scoreInput.value.trim() === "" ||
        !Number.isFinite(score) ||
        score < 0 ||
        score > 100 ||
        !Number.isInteger(score)
    ) {
        gradeResult.textContent =
            "Please enter a whole-number score from 0 to 100.";

        gradeResult.style.backgroundColor = "#eeeeee";
        gradeResult.style.color = "#333333";
        return;
    }

    // Variables for grade and result colors
    let grade = "";
    let background = "";
    let textColor = "";

    // Determine the grade using if / else if / else
    if (score >= 90) {
        grade = "A";
        background = "#c8e6c9";
        textColor = "#1b5e20";

    } else if (score >= 80) {
        grade = "B";
        background = "#a5d6a7";
        textColor = "#1b5e20";

    } else if (score >= 70) {
        grade = "C";
        background = "#fff59d";
        textColor = "#795548";

    } else if (score >= 60) {
        grade = "D";
        background = "#ef9a9a";
        textColor = "#7f0000";

    } else {
        grade = "F";
        background = "#e57373";
        textColor = "#7f0000";
    }

    // Display the result using DOM manipulation
    gradeResult.textContent =
        "Score: " + score + " → Grade: " + grade;

    // Change styles directly through JavaScript
    gradeResult.style.backgroundColor = background;
    gradeResult.style.color = textColor;
});
