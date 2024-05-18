const Square = require('../Lib/Shapes/Square.js');

describe("Square", () => {
    it("should return logo with user choice of text, text color, shape, and shape color", () => {
        const square = new Square("Dia", "aqua", "blueviolet");
        expect(square.render()).toEqual(`
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="blueviolet"/>
            <text x="100" y="125" font-size="70" text-anchor="middle" fill="aqua">Dia</text>
        </svg>
        `)
    });
});