// Path: Lib/shapes/sixSidedPolygon.js
// Child class of Shape.

const Shape = require("./Shape");

class SixSidedPolygon extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    };
    render() {
        return `
        <svg height="280" width="360" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,15 258,77 258,202 150,265 42,202 42,77" fill="${this.shapeColor}"/>
        <text x="145" y="155" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>
       `;
    };
};
module.exports = SixSidedPolygon;