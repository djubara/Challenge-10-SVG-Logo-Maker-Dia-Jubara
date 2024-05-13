// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs"); //file system
const questions = require("./lib/questions");
const fileName = require("./lib/logo");
const w3sColors = require("./lib/w3sColors");
const generateSVGLogo = require("./lib/generateSVGLogo");
// const { Circle, Square, Triangle } = require("./lib/shapes");
// const validate = require("./lib/validate");



function writeToFile(fileName, data, utf8) {
    const svg = generateSVGLogo(data);
    fs.writeFile(fileName, data, function (err) {
        console.log(err ? err : "SVG Logo Generated!");
    });
}
// function to initialize program and prompt user
function init() {
    inquirer.prompt(questions).then(function (text, textColor, logoShape, logoColor) {
        let shapes;
        switch (logoShape) {
            case "Circle":
                shapes = new Circle(text, textColor, logoColor);
                break;
            case "Square":
                shapes = new Square(text, textColor, logoColor);
                break;
            case "Triangle":
                shapes = new Triangle(text, textColor, logoColor);
                break;
            // default:
            //     shapes = new Circle(text, textColor, logoColor);
        }
        const fileName = "assets/logo.svg";

        writeToFile(fileName, shapes.render(text, textColor, logoColor), "utf8");
        const error = "Error: SVG Logo not generated!";
        console.log(error ? error : "SVG Logo Generated Successfully!");
    });
}

// function call to initialize program
init();