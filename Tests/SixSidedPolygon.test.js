const SixSidedPolygon = require('../Lib/Shapes/SixSidedPolygon.js');

describe("SixSidedPolygon", () => {
    it("should return logo with user choice of text, text color, shape, and shape color", () => {
        const sixSidedPolygon = new SixSidedPolygon("Dia", "aqua", "blueviolet");
        expect(sixSidedPolygon.render()).toEqual(`
        <svg height="280" width="360" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,15 258,77 258,202 150,265 42,202 42,77" fill="blueviolet"/>
        <text x="145" y="155" font-size="70" text-anchor="middle" fill="aqua">Dia</text>
      </svg>
       `)
    });
});