const Circle = require('../Lib/Shapes/Circle.js');

describe('Circle', () => {
    it("should return logo with user choice of text, text color, shape, and shape color", () => {
        const circle = new Circle("Dia", "aqua", "blueviolet");
        expect(circle.render()).toEqual(`
            <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="100" fill="blueviolet" />
            <text x="150" y="125" font-size="70" text-anchor="middle" fill="aqua">Dia</text>
            </svg>
            `
        );
    });
});