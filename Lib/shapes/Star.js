// Path: Lib/shapes/Star.js
// Child class of Shape.

const Shape = require("./Shape");

class Star extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    };
    render() {
        return `
        <svg height="210" width="500" xmlns="http://www.w3.org/2000/svg">
        <polygon points="100,10 40,198 190,78 10,78 160,198" />
        </svg>
        `
    };
};
module.exports = Star;