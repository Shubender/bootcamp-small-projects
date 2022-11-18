// What will we need? Everything what we learned in the past 3 weeks:
//  - getting HTMLElements from the DOM
//  - global variables which holds information about the game and status
//  - multiple event listener
//  - working with arrays and doing different kind of for-loops
//  - adding classes dynamically to HTMLElements with JS

// Later as well:
//  - working with own created JS objects which hold multiple information in one variable
//    example: let gameResult = { winner: 'player1', winningChips: [2,3,4,5] }
//    access winner for example with: gameResult.winner


// 1. DEFINE GLOBAL VARIABLES
let columns = document.getElementsByClassName("column");
let holesEl = document.getElementsByClassName("hole");
//console.log(holesElements);

let playerMove = 1;
let numberOfColums = 7;
let numberOfRows = 6;
let numToWin = 4;
let gameResult;

//Write function to restart (rewrite most var)
//two textarea for basic lenght of fields

let holes = [
    0, 0, 0, 0, 0, 0,  // first column
    0, 0, 0, 0, 0, 0,  // second column 
    0, 0, 0, 0, 0, 0,  // third column
    0, 0, 0, 0, 0, 0,  // fourth column
    0, 0, 0, 0, 0, 0,  // fifth column
    0, 0, 0, 0, 0, 0,  // sixth column
    0, 0, 0, 0, 0, 0,  // seventh column
];
console.log(holes);

for (let i = 0; i < columns.length; i++) {
    columns[i].addEventListener("click", () => {
        console.log("click column:", i + 1);
        let result = fillColomn(i);
        const successful = result.success;
        const filledInd = result.filledInd;
        if (successful) {
            let columnWin = checkColumnWin(i);
            let rowWin = checkForRowWin(filledInd);
            let giagWin = checkForDiagonalWin();
            if (playerMove === 1) {
                playerMove = 2;
            }else if (playerMove === 2) {
                playerMove = 1;
            }
        }
    });
}


function fillColomn(i) {
    const startInd = i * numberOfRows;
    const endInd = startInd + numberOfRows;

    for (let j = startInd; j < endInd; j++) {
        if (holes[j] === 0) {
            holes[j] = playerMove;
            console.log(holes);
            holesEl[j].classList.add('player' + playerMove);
            return { success: true, filledInd: j};
        }
    }
    return { success: false};
}

function checkColumnWin(i) {
    //console.log('test checkColumnWin');
    const startIdx = i * numberOfRows; // columnIdx multiplies by the number of rows;
    const endIdx = startIdx + numberOfRows; // startIdx + number of rows
    let countChips = 0;
    let lastChip;

    for (let j = startIdx; j < endIdx; j++) {
        
        if (holes[j] === 0) {
            return false;
        }
        if (holes[j] !== lastChip) {
            lastChip = holes[j];
            countChips = 1;
        } else {
            countChips++;
        }

        if (countChips === 4) {
            console.log('Player ' + holes[j] + ' WIN' + ' with Columns!');
            return true;
        }

    }
    return false;
}


function checkForRowWin(filledInd) {
    //console.log('test checkForRowWin: ', filledInd);
    const startInd = filledInd % numberOfRows;
    //console.log('startRow: ', startInd);
    const endInd = numberOfColums * numberOfRows;
    let countChips = 0;
    let lastChip;

    for (let j = startInd; j < endInd; j += numberOfRows) {
        
        if (holes[j] === 0) {
            countChips = 0;
        } else if (holes[j] !== lastChip) {
            lastChip = holes[j];
            countChips = 1;
        } else {
            countChips++;
        }

        if (countChips === 4) {
            console.log('Player ' + holes[j] + ' WIN ' + ' with Rows!');
            return true;
        }
    }
    return false;
}

function checkForDiagonalWin() {
    for (let i = 0; i < winIndices.length; i++) {
        const hasWin = winIndices[i].every(winIndex => {
            return holes[winIndex] === playerMove;
        });
        if (hasWin === true){
            console.log('Player ' + holes[i] + ' WIN ' + ' with Diag!');
            return true;
        }
    }
    return false;
}



// checkForDraw();

const winIndices = [
    // starting from first row; second column
    [0, 7, 14, 21], // index 0
    [7, 14, 21, 28], // index 1
    [14, 21, 28, 35], // index 2

    // starting from first row; second column
    [6, 13, 20, 27], // index 3
    [13, 20, 27, 34], // index 4
    [20, 27, 34, 41], // index 5

    // starting from first row; third column
    [12, 19, 26, 33], // index 6
    [19, 26, 33, 40], // index 7

    // starting from first row; fourth column
    [18, 25, 32, 39], // index 8

    // starting from second row; first column
    [1, 8, 15, 22], // index 9
    [8, 15, 22, 29], // index 10

    // starting from third row; first column
    [2, 9, 16, 23], // index 11

    // starting from first row; 7th/last column
    [36, 31, 26, 21], // index 12
    [31, 26, 21, 16], // index 13
    [26, 21, 16, 11], // index 14

    // starting from first row; 6th column
    [30, 25, 20, 15], // index 15
    [25, 20, 15, 10], // index 16
    [20, 15, 10, 5], // index 17

    // starting from first row; 5th column
    [24, 19, 14, 9], // index 18
    [19, 14, 9, 4], // index 19

    // starting from first row; 4th column
    [18, 13, 8, 3], // index 20

    // starting from second row; 7th/last column
    [37, 32, 27, 22], // index 21
    [32, 27, 22, 18], // index 22

    // starting from third row; 7th/last column
    [38, 33, 28, 23], // index 23
];