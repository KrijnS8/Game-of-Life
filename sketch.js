let size = 20;
let cellState = [];

let updateInterval;
let updateSpeed = 500;
let mouseInterval;
let mouseMemory = [];

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);

    for(let x = 0; x < window.innerWidth / size; x++) {
        cellState.push([]);
        for(let y = 0; y < window.innerHeight / size; y++) {
            cellState[x][y] = false;
        }
    }
}

function draw() {
    push();
    stroke(150);
    for(let x = 0; x < cellState.length; x++) {
        for(let y = 0; y < cellState[x].length; y++) {
            if(cellState[x][y] === false) {fill('white');} else {fill('black');}
            rect(x * size, y * size, size, size);
        }
    }
    pop();
}

function mousePressed() {
    mouseInterval = setInterval(() => {
        let x = Math.floor(mouseX / size);
        let y = Math.floor(mouseY / size);

        if(mouseMemory.includes(`${x}${y}`)) {
            return
        }
        cellState[x][y] = !cellState[x][y];
        mouseMemory.push(`${x}${y}`);
    }, 10);
}

function mouseReleased() {
    clearInterval(mouseInterval);
    mouseMemory = [];
}

function keyPressed() {
    if(keyCode === 32 && updateInterval === undefined) {
        updateInterval = setInterval(update, updateSpeed);
    } else if(keyCode === 32 && updateInterval !== undefined) {
        clearInterval(updateInterval);
        updateInterval = undefined;
    }

    let newCellState = cellState;

    function update() {
        for(let x = 0; x < cellState.length; x++) {
            for(let y = 0; y < cellState[x].length; y++) {

            }
        }
    }
}
