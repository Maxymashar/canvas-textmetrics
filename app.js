const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const TEXT = 'HTML canvas q';

// The drawing positions
const POS_X = 100;
const POS_Y = 100;

// Set the baseline to botton
context.textBaseline = 'bottom';

// Draw the text
context.fillStyle = '#373737';
context.font = '36px roboto';
context.fillText(TEXT, POS_X, POS_Y);

// Get the textMetrics object
const {
  actualBoundingBoxLeft: left,
  actualBoundingBoxAscent: ascent,
  actualBoundingBoxRight: right,
} = context.measureText(TEXT);

// Get the bounding-box baseX
const BOUNDING_BOX_BASE_X = POS_X - left;
const BOUNDING_BOX_BASE_Y = POS_Y;
const BOUNDING_BOX_BASE_WIDTH = right + left;
const BOUNDING_BOX_BASE_HEIGHT = ascent;

console.log('x', BOUNDING_BOX_BASE_X);
console.log('y', BOUNDING_BOX_BASE_Y);
console.log('w', BOUNDING_BOX_BASE_WIDTH);
console.log('h', BOUNDING_BOX_BASE_HEIGHT);

context.strokeRect(
  BOUNDING_BOX_BASE_X,
  BOUNDING_BOX_BASE_Y - BOUNDING_BOX_BASE_HEIGHT,
  BOUNDING_BOX_BASE_WIDTH,
  BOUNDING_BOX_BASE_HEIGHT
);
