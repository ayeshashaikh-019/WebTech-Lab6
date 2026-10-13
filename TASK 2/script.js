/* Task 2: Number Classifier with Comparison Operators */

// Function to classify a number
function classifyNumber(num) {
    let result = "";

    // Check whether the number is positive, negative, or zero
    if (num > 0) {
        result = num + " is positive";

        // Check whether the positive number is even or odd
        if (num % 2 === 0) {
            result += " and even.";
        } else {
            result += " and odd.";
        }

    } else if (num < 0) {
        result = num + " is negative";

        // Check whether the negative number is even or odd
        if (num % 2 === 0) {
            result += " and even.";
        } else {
            result += " and odd.";
        }

    } else if (num === 0) {
        result = "0 is zero.";
    }

    return result;
}

// Test the function with six different values
console.log("Number Classification Results:");
console.log("-------------------------------");

console.log(classifyNumber(8));
console.log(classifyNumber(7));
console.log(classifyNumber(-4));
console.log(classifyNumber(-3));
console.log(classifyNumber(0));
console.log(classifyNumber(12));
