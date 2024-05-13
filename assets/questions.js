// Description: This file contains the questions for the user input. The questions are exported and used in the index.js file.
// Array of questions for user input
const questions = [
    {
        type: "input",
        message: "Please enter up to 3 characters for the logo:",
        name: "text",
        validate: (answer) => {
            if (answer.length === 0 || answer.length > 3) {
                console.log("\n Please enter 1 to 3 characters");
                return false;
            }
            return true;
        },
    },
    {
        type: "list",
        // the user is prompted to select a color from the list or enter a hexadecimal number.
        message: "Please select a color for the text by either selecting from the keyword list or entering a hexadecimal number:",
        name: "textColor",
        choices: w3cColors,
        // validate: validateColor(answer)
    },
    {
        type: "list",
        message: "Please select a shape for the logo:",
        name: "logoShape",
        choices: [
            "Circle",
            "Square",
            "Triangle",
            // "Star",
        ]
    },
    {
        type: "list",
        message: "Please select the color of the shape:",
        name: "logoColor",
        choices: w3cColors,
        // validate: validateColor(answer)
    },
];
module.exports = questions;