
// function to generate SVG logo

function generateSVGLogo(data) {
  return `
  <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill=${data.logoBgColor} />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill=${data.charsColor}>${data.logoChars}</text>

</svg>
      `;
}

module.exports = generateSVGLogo;