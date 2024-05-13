// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs"); //file system
const questions = require("./Lib/dist/questions");
const fileName = require("./assets/img/logo.svg");
const colors = require("./Lib/colors/w3sColors");
const selectShape = require("./Lib/dist/selectShape");
const generateSVGLogo = require("./Lib/dist/generateSVGLogo");
// const { Circle, Square, Triangle } = require("./Lib/shapes/Shape");
// const validate = require("./lib/validate");

// function to generate SVG logo
function generateSVGLogo(response) {
    const logo = selectShape(response);
    fs.writeFile(fileName, logo, () => {
        if (err) {
            console.log("Error: SVG Logo not generated!");
        }
        else {
            console.log("SVG Logo Generated Successfully!");
        }
    });
}

// function to initialize program and prompt user
function init() {
    inquirer.prompt(questions).then((response) => {
        generateSVGLogo(response);
    })
        .catch((error) => {
            console.log(error);
        });
}

// function call to initialize program
init();






// const fileName = "assets/logo.svg";

// writeToFile(fileName, shapes.render(text, textColor, logoColor), "utf8");
// const error = "Error: SVG Logo not generated!";
// console.log(error ? error : "SVG Logo Generated Successfully!");
// });
// }