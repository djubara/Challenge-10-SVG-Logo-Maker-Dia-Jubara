const Star = require('../Lib/Shapes/Star.js');

describe("Star", () => {
    it("should return logo with user choice of text, text color, shape, and shape color", () => {
        const star = new Star("Dia", "aqua", "blueviolet");
        expect(star.render()).toEqual(`
        <svg height="420" width="1000" xmlns="http://www.w3.org/2000/svg">
        <polygon points="100,10 40,198 190,78 10,78 160,198" fill="blueviolet" />
        <text x="100" y="125" font-size="50" text-anchor="middle" fill="aqua">Dia</text>
        </svg>
        `)
    });
});