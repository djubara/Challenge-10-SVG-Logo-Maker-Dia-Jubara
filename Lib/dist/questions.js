// Description: This file contains the questions for the user input. The questions are exported and used in the index.js file.
// The colors keyword list is imported from the w3sColors.js file. The user is given a choice between entering the color using a keyword or entering a hexadecimal number. 
// The user is prompted to select a shape for the logo from a list of shapes. 
// The user is prompted to select the color of the shape from the keyword list. 
// The questions are exported and used in the index.js file.

const w3sColors = require("../colors/w3sColors");
// let inputMethod = "";

// // Color validation function for keyword selection block
// function validateColorKeyword(answer) {
//     if (w3sColors.includes(answer)) {
//         return true;
//     }
//     else {
//         console.log("\n Please enter a valid color keyword");
//         return false;
//     }
// }

// Color validation function for hexadecimal input block
function validateColorHex(answer) {
    const hexColor = /^#[0-9A-Fa-f]{6}$/i;
    if (!answer.match(hexColor)) {
        console.log("\n Please enter a valid hexadecimal number");
        return false;
    }
    else {
        return true;
    }
}

// User input block
console.log(" ============================================");
console.log("║      Welcome to the SVG Logo Generator!    ║");
console.log(" ============================================");
console.log("\n");
console.log("✨ Please note that selecting the same color for the text and the shape will result in the text being invisible.");
console.log("✨ Please follow the prompts to generate your logo.");
console.log("==================================================================================================================");
console.log("\n");
const questions = [
    // Text input block
    {
        // selecting the text and the color of the text for the logo
        // the length of the text should be between 1 and 3 characters and will be validated
        // the color will be selected from the list of colors adopted from 3WSchools or the user can enter a hexadecimal number. The color will be validated. 
        // The color of the text will be set to the selected color but cannot be the same as the color of the shape.     

        type: "input",
        message: "Please enter 1 to 3 characters for your logo:",
        name: "text",
        validate: (answer) => {
            if (answer.length === 0 || answer.length > 3) {
                console.log("\n Please enter 1 to 3 characters");
                return false;
            }
            else if (answer === " " || answer === "  " || answer === "   ") {
                console.log("\n Please erase all the space bar characters by clicking the backspace and re-enter 1 to 3 valid characters");
                answer.length
                return false;
            }
            return true;
        },
    },
    {
        // the user is prompted to select a color from the list of colors or enter a hexadecimal number. 

        type: "list",
        loop: false,
        message: "Please select the method you would like to use to select a text color:",
        name: "textColorInputMethod",
        choices: ["Keyword Selection", "Hexadecimal Input"],
    },
    {
        type: "list",
        loop: false,
        name: "textKeywordColor",
        message: "Please select a color for the text by selecting a keyword from the list:",
        choices: w3sColors,

        // only ask this question if the user selects "Keyword Selection"

        when: (answer) => {
            if (answer.textColorInputMethod === "Keyword Selection") {
                return true;
            }
            else {
                return false;
            }
        },
    },
    {
        // only ask this question if the user selects "Hexadecimal Input"

        type: "input",
        message: "Please enter a hexadecimal number for the text color between #000000 and #FFFFFFF:",
        name: "textHexColor",

        // only ask this question if the user selects Keyword Selection or Hexadecimal Input

        when: (answer) => {
            if (answer.textColorInputMethod === "Hexadecimal Input") {
                return true;
            }
            else {
                return false;
            }
        },
        validate: validateColorHex
    },

    // Shape selection block

    {
        type: "list",
        message: "Please select a shape for your logo:",
        name: "logoShape",
        choices: [
            "Circle",
            "Square",
            "Triangle",
            "Star",
            "Six-Sided Polygon",
        ]
    },
    {

        type: "list",
        message: "Please select the method you would like to use to select a text color:",
        name: "shapeColorInputMethod",
        choices: ["Keyword Selection", "Hexadecimal Input"],
    },
    {
        type: "list",
        name: "shapeKeywordColor",
        message: "Please select a color for the text by selecting a keyword from the list:",
        choices: w3sColors,

        // only ask this question if the user selects "Keyword Selection"

        when: (answer) => {
            if (answer.shapeColorInputMethod === "Keyword Selection") {
                return true;
            }
            else {
                return false;
            }
        },
    },
    {
        // only ask this question if the user selects "Hexadecimal Input"

        type: "input",
        message: "Please enter a hexadecimal number for the shape color between #000000 and #FFFFFFF:",
        name: "shapeHexColor",

        when: (answer) => {
            if (answer.shapeColorInputMethod === "Hexadecimal Input") {
                return true;
            }
            else {
                return false;
            }
        },

        validate: validateColorHex
    }
];
module.exports = questions;