// Initialize 16x16 grid
let grid = document.querySelector('.grid'); // Select grid as parent node
for(let i = 0; i < 16; i++) {
    console.log(`Row ${i}: \r`);
    let currRow = document.createElement('div');
    currRow.setAttribute("class", `row row_${i}`);
    for(let j = 0; j < 16; j++) {
        let currCol = document.createElement('div');
        currCol.setAttribute("class", `col col_${j}`);
        currRow.appendChild(currCol);
    }
    grid.appendChild(currRow);
}
