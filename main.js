let intiallybrushSize = 5;

let capBrushShape = "round";

function whiteboard() {
    const canvasBoard = document.querySelector("#canvasBoard");
    const canvasBoardtx = canvasBoard.getContext("2d");
    canvasBoard.height = window.innerHeight - 100;
    canvasBoard.width = window.innerWidth - 100;

    let painting = false;

    function startPosition(e) {
        painting = true;
        drawLines(e);
    }

    function finishPosition() {
        painting = false;
        canvasBoardtx.beginPath();
    }

    function drawLines(e) {
        if (!painting) { return };
        canvasBoardtx.lineWidth = intiallybrushSize;
        canvasBoardtx.lineCap = capBrushShape;

        let xAxisoffset = 60;
        let yAxisoffset = 60;
        canvasBoardtx.lineTo(e.clientX - xAxisoffset, e.clientY - yAxisoffset)
        canvasBoardtx.strokeStyle = colorValue;
        canvasBoardtx.stroke();
        canvasBoardtx.beginPath();
        canvasBoardtx.moveTo(e.clientX - xAxisoffset, e.clientY - yAxisoffset)
    }

    function newSave() {
        finishPosition();

    }

    // listeners
    canvasBoard.addEventListener("mousedown", startPosition);
    canvasBoard.addEventListener("touchstart", startPosition);

    canvasBoard.addEventListener("mouseup", newSave);
    canvasBoard.addEventListener("touchend", newSave);

    canvasBoard.addEventListener("mousemove", drawLines);
    canvasBoard.addEventListener("touchmove", drawLines);
}

var brownButton = document.querySelector("#brown")
var blackButton = document.querySelector("#black")
var whiteButton = document.querySelector("#white")
var blueButton = document.querySelector("#blue")
var redButton = document.querySelector("#red")
var greenButton = document.querySelector("#green")
var purpleButton = document.querySelector("#purple")
var yellowButton = document.querySelector("#yellow")
var selectedColor = document.querySelector("#selectedColor")

blueButton.addEventListener("click", blue)
redButton.addEventListener("click", red)
yellowButton.addEventListener("click", yellow)
greenButton.addEventListener("click", green)
purpleButton.addEventListener("click", purple)
brownButton.addEventListener("click", brown)
blackButton.addEventListener("click", black)
whiteButton.addEventListener("click", white)

let colorValue = "black"
let backgroundColor = colorValue;

function blue() {
    colorValue = "blue"
    selectedColor.className = "";
    selectedColor.classList.add("blueSelect");

}

function red() {
    colorValue = "red"
    selectedColor.className = "";
    selectedColor.classList.add("redSelect");
}

function yellow() {
    colorValue = "yellow"
    selectedColor.className = "";
    selectedColor.classList.add("yellowSelect");
}

function green() {
    colorValue = "green"
    selectedColor.className = "";
    selectedColor.classList.add("greenSelect");
}

function purple() {
    colorValue = "purple"
    selectedColor.className = "";
    selectedColor.classList.add("purpleSelect");
}

function brown() {
    colorValue = "brown"
    selectedColor.className = "";
    selectedColor.classList.add("brownSelect");
}

function black() {
    colorValue = "black"
    selectedColor.className = "";
    selectedColor.classList.add("blackSelect");
}

function white() {
    colorValue = "white"
    selectedColor.className = "";
    selectedColor.classList.add("whiteSelect");
}


function changeBackground() {
    var canvasBoard = document.getElementById("canvasBoard");
    var canvasBoardtx = canvasBoard.getContext("2d");
    canvasBoardtx.fillStyle = colorValue;
    canvasBoardtx.fillRect(0, 0, canvasBoard.width, canvasBoard.height);
}

let fill = document.querySelector("#fill");
let resetButton = document.querySelector("#deleteAllClearBoard");

window.addEventListener("load", whiteboard);


fill.addEventListener("click", changeBackground);

resetButton.addEventListener("click", deleteAllClearBoard);

function deleteAllClearBoard() {
    var canvasBoard = document.getElementById("canvasBoard");
    var canvasBoardtx = canvasBoard.getContext("2d");
    canvasBoardtx.fillStyle = "white";
    canvasBoardtx.fillRect(0, 0, canvasBoard.width, canvasBoard.height);
    colorValue = black;
    backgroundColor = white;
    selectedColor.className = "";
    selectedColor.classList.add("blackSelect");

}