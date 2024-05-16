// Path: Lib/shapes/Star.js
// Child class of Shape.

const Shape = require("./Shape");

class Star extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    };
    render() {
        return `
        <svg height="420" width="1000" xmlns="http://www.w3.org/2000/svg">
        <polygon points="100,10 40,198 190,78 10,78 160,198" fill="${this.shapeColor}" />
        <text x="100" y="125" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `
    };
};
module.exports = Star;