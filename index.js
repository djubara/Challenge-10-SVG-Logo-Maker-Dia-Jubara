// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs"); //file system
const generateSVGLogo = require("./lib/generateSVGLogo");
const { Circle, Square, Triangle } = require("./lib/shapes");
// const validate = require("./lib/validate");

//refernce for colors: https://www.w3schools.com/colors/colors_names.asp
const w3cColors = ['aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure', 'beige', 'bisque', 'black', 'blanchedalmond', 'blue', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgrey', 'darkgreen', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'grey', 'green', 'greenyellow', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgrey', 'lightgreen', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey', 'lightsteelblue', 'lightyellow', 'lime', 'limegreen', 'linen', 'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'purple', 'rebeccapurple', 'red', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver', 'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow', 'springgreen', 'steelblue', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'wheat', 'white', 'whitesmoke', 'yellow', 'yellowgreen']




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

// Function to validate color
// function validateColor(answer) {
//     if (w3cColor.includes(answer.toLowerCase())) {
//         return true;
//     }
//     return "Please enter a valid color from the list";

// }



function writeToFile(fileName, data, utf8) {
    const svg = generateSVGLogo(data);
    fs.writeFile(fileName, data, function (err) {
        console.log(err ? err : "SVG Logo Generated!");
    });
}
// function to initialize program and create README file
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
            default:
                shapes = new Circle(text, textColor, logoColor);
        }
        const fileName = "assets/logo.svg";

        writeToFile(fileName, shapes.render(text, textColor, logoColor), "utf8");

        console.log(err ? err : "SVG Logo Generated Successfully!");
    });
}

// function call to initialize program
init();