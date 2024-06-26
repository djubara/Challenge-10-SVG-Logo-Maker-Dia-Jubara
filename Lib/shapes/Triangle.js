// Path: Lib/shapes.js 
// Child class of Shape.

const Shape = require("./Shape");

class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    };
    render() {
        return `
            <svg version="1.1" 
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <polygon points="100, 15 200, 200 0, 200" fill="${this.shapeColor}"/>
            <text x="105" y="155" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>
            `
    };
};
module.exports = Triangle;