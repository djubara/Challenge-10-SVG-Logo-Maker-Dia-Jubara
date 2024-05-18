const Triangle = require('../Lib/Shapes/Triangle.js');

describe("Triangle", () => {
    it("should return logo with user choice of text, text color, shape, and shape color", () => {
        const triangle = new Triangle("Dia", "aqua", "blueviolet");
        expect(triangle.render()).toEqual(`
            <svg version="1.1" 
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <polygon points="100, 15 200, 200 0, 200" fill="blueviolet"/>
            <text x="100" y="155" font-size="70" text-anchor="middle" fill="aqua">Dia</text>
            </svg>
            `)
    });
});