// function called in index.js within generateSVGLogo.
// This function creates the SVG logo based on the user's input. The user created logo can be viewed by opening the ./assets/html/index.html in the browser.

const Circle = require("../Shapes/Circle");
const Square = require("../Shapes/Square");
const Triangle = require("../Shapes/Triangle");
const Star = require("../Shapes/Star");
const SixSidedPolygon = require("../Shapes/SixSidedPolygon");

function selectShape(response) {
    const textColor = response.textKeywordColor ?? response.textHexColor;
    const logoColor = response.shapeKeywordColor ?? response.shapeHexColor;

    let logoShape = response.logoShape;

    switch (logoShape) {
        case "Circle":
            logoShape = new Circle(response.text, textColor, logoColor);
            break;
        case "Square":
            logoShape = new Square(response.text, textColor, logoColor);
            break;
        case "Triangle":
            logoShape = new Triangle(response.text, textColor, logoColor);
            break;
        case "Star":
            logoShape = new Star(response.text, textColor, logoColor);
            break;
        case "Six-Sided Polygon":
            logoShape = new SixSidedPolygon(response.text, textColor, logoColor);
            break;

    }
    return logoShape.render();
}
module.exports = selectShape;