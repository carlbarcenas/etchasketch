const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = '#333333';
let size = DEFAULT_SIZE;

// Function to Initialize Grid
function initializeGrid(size) {
    // Creating Grid
    let grid = document.querySelector('.grid'); // Select grid as parent node
    for (let i = 0; i < size; i++) {                                // Rows
        let currRow = document.createElement('div');
        currRow.setAttribute("class", `row row_${i}`);
        for (let j = 0; j < size; j++) {                            // Cols
            let currCol = document.createElement('div');
            currCol.setAttribute("class", `col col_${j}`);
            currCol.addEventListener('mouseover', activateBlock);   // Listeners for drawing
            currCol.addEventListener('mousedown', activateBlock);
            currRow.appendChild(currCol);
        }
        grid.appendChild(currRow);
    }
}


// Function for drawing
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)
function activateBlock(e) {
    if(e.type === 'mouseover' && !mouseDown) return;
    e.target.style.backgroundColor = DEFAULT_COLOR;
}


// Function to add rainbow coloring [TODO]
const rainbowBtn = document.querySelector('.rainbow_btn');
rainbowBtn.addEventListener('click', rainbowPencil);
function rainbowPencil(e) {
    console.log('test');
    return 0;
}


// Function for Resizing
let sliderval = document.querySelector('.slider_val');
let slider = document.querySelector('.slider');
slider.addEventListener('change', function() {
    sliderval.innerHTML = slider.value;
    clearBoard();
    size = slider.value;
    initializeGrid(slider.value);
})


// Function for Clearing
const clearbtn = document.querySelector('.clc_btn');
clearbtn.addEventListener('click', clearBoard);
let grid = document.querySelector('.grid');
function clearBoard() {
    grid.innerHTML = "";
    initializeGrid(size);
}


// Load Application
window.onload = () => {
    initializeGrid(DEFAULT_SIZE);
}