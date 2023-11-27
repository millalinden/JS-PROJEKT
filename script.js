"use strict";

let numSelected = null;
let tileSelected = null;
let currentLevel = "easy"; // Default level is easy

let errors = 0;

// Easy level
let board = [
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
];
// Easy level solution
let solution = [
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
];

// Hard level
let boardHard = [
    "2-89----7",
    "--54-7--2",
    "-9------6",
    "-----584-",
    "-3-----6-",
    "-526-----",
    "5------7-",
    "7--5-89--",
    "6----95-4"
];

// Hard level solution
let solutionHard = [
    "218936457",
    "365487192",
    "497152386",
    "176295843",
    "934871265",
    "852643719",
    "529314678",
    "743568921",
    "681729534"
];

// When page reload --> the game should be set
window.onload = function () {
    setGame();
};

// How the board will look before playing
function setGame() {
    clearBoard();
    clearDigits();
    
    // Digits 1-9
    for (let i = 1; i <= 9; i++) {
        // create div id="i"
        let number = document.createElement("div");
        number.id = i;
        number.textContent = i;
        number.addEventListener("click", selectNumber);
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);
    }

    // Select board based on the current level
    let currentBoard = currentLevel === "easy" ? board : boardHard;
    let currentSolution = currentLevel === "easy" ? solution : solutionHard;

    // Board 9x9
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            if (currentBoard[r][c] != "-") {
                tile.innerText = currentBoard[r][c];
                tile.classList.add("tile-start");
            }
            if (r == 2 || r == 5) {
                tile.classList.add("horizontal-line");
            }
            if (c == 2 || c == 5) {
                tile.classList.add("vertical-line");
            }
            tile.addEventListener("click", selectTile);
            tile.classList.add("tile");
            document.getElementById("board").append(tile);
        }
    }
}

// Clear existing board
function clearBoard() {
    document.getElementById("board").innerHTML = "";
}

// Clear digits container
function clearDigits() {
    document.getElementById("digits").innerHTML = "";
}

// How to interact with the numbers, adds style when clicked
function selectNumber() {
    // Your existing code for selecting numbers
}

function selectTile() {
    // Your existing code for selecting tiles
}

// Toggle between easy and hard levels
function toggleLevel() {
    currentLevel = currentLevel === "easy" ? "hard" : "easy";
    setGame();
}

// Add click event listener to the toggle button
let toggleEl = document.querySelector("#toggle");
toggleEl.addEventListener("click", toggleLevel);
