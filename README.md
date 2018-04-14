# 08 - Fun with HTML5 Canvas - JavaScript30 Challenge

### Practising: 
Drawing a styled lines using canvas

### Notes : 
We draw on the context of the canvas:
```javascript
var ctx = canvasContainer.getContext("2d");
```
```javascript
ctx.strokeStyle = 'blue'; //line color
ctx.lineJoin = 'round'; // relation between lines
ctx.lineCap = 'round'; // line tip shape
ctx.lineWidth = 10; // line thickness
```

```javascript
let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e) {
if (!isDrawing) {
  return
}
//rest of the code
}

canvasContainer.addEventListener('mousemove', draw); // fires anyway in case of mouse movement
canvasContainer.addEventListener('mousedown', (e) => {
  isDrawing = true; // used to complete executing the rest of draw() only if the isDrawing variable is true
  lastX = e.offsetX; //to update global variable
  lastY = e.offsetY; //to update global variable
}); 
```
```javascript
canvasContainer.addEventListener('mouseup', (e) => {
  isDrawing = false; //to update global variable
});
```
```javascript
let direction = true;

if (ctx.lineWidth >= 100 || ctx.lineWidth <= 5) {
  direction = !direction; //to update a global var at a certain condition or an incrementing variable
}
if (direction) {
  ctx.lineWidth++; //to apply condition according to an alternating variable
} else {
  ctx.lineWidth--; //to apply condition according to an alternating variable
}
```
```javascript
[lastX, lastY] = [e.offsetX, e.offsetY]; //es6 destructuring assignment
```
```javascript
let hue = 0;

ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`; //We can create a changing colors using the hsl() http://mothereffinghsl.com/
hue++
```
```javascript
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.beginPath(); //to create new execution context for the new canvas methods
ctx.moveTo(50, 50); // to start from this point
ctx.lineTo(200, 50); // to draw a line from the start point to this point
ctx.stroke(); // to execute the above orders and display them on the screen
```

## Getting Started

Clone or download the repository to your local drive.

### Prerequisites

What you need to install:

This project was created using Gulp automation tool, you can run the following command to the local repo directory to install all the dev dependencies 

```
npm install
```

### Write gulp in the terminal / command line to run the live server.

## Authors

* **Mohamed Dewidar** - *practising the mentioned methods* - [Linkedin](https://www.linkedin.com/in/mohamed-dewidar-331252153/)

## License

This project is licensed under the MIT License. (open-source)

## Acknowledgments

* Wesbos - *creator of the challenge* - (https://github.com/wesbos/JavaScript30)