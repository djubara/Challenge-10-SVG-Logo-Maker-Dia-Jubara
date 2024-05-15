// Packages needed for this application:
const inquirer = require("inquirer");
const fs = require("fs"); //file system
const questions = require("./Lib/dist/questions");
const fileName = "./assets/img/logo.svg";
// const colors = require("./Lib/colors/w3sColors");
const selectShape = require("./Lib/dist/selectShape");
// const generateSVGLogo = require("./Lib/dist/generateSVGLogo");
// const { Circle, Square, Triangle } = require("./Lib/shapes/Shape");
// const validate = require("./lib/validate");

// function to generate SVG logo
function generateLogo(response) {
    const logo = selectShape(response);
    fs.writeFile(fileName, logo, (err) => {
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
        generateLogo(response);
    })
        .catch((error) => {
            console.log(error);
        });
}

// function call to initialize program
init();