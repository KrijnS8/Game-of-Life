let size = 20;

let cells = [];

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);

    for(let i = 0; i < window.innerWidth / size; i++) {
        cells.push([]);
    }
}

function draw() {
  for(let y = 0; y < window.innerHeight / size; y++) {
      for(let x = 0; x < window.innerWidth / size; x++) {
          rect(x * size, y * size, size, size);

      }
  }
}
