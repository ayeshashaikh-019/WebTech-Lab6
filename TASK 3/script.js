/* Task 3: Day-Name Switch with DOM Display */

// Select the HTML elements
const dayInput = document.getElementById("dayInput");
const checkButton = document.getElementById("checkButton");
const result = document.getElementById("result");

// Run the code when the button is clicked
checkButton.addEventListener("click", function () {

    // Read the input value
    const dayNumber = Number(dayInput.value);

    // Variables for the day name and input validity
    let dayName = "";
    let isValid = true;

    // Map day numbers to day names
    switch (dayNumber) {
        case 1:
            dayName = "Monday";
            break;

        case 2:
            dayName = "Tuesday";
            break;

        case 3:
            dayName = "Wednesday";
            break;

        case 4:
            dayName = "Thursday";
            break;

        case 5:
            dayName = "Friday";
            break;

        case 6:
            dayName = "Saturday";
            break;

        case 7:
            dayName = "Sunday";
            break;

        default:
            dayName = "Invalid input! Please enter a number from 1 to 7.";
            isValid = false;
    }

    // Update the page using DOM manipulation
    result.textContent = dayName;

    // Change the text color directly through JavaScript
    if (isValid) {
        result.style.color = "green";
    } else {
        result.style.color = "red";
    }
});
