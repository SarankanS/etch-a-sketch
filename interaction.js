
var sizeOfBoard = 16;
createBoard(sizeOfBoard);



function createBoard(size){
    //Creates rows and columns of board
    const board = document.querySelector(".board");
    for (let i=0; i<size; i++){
        const row = document.createElement("div");
        row.classList.add("row");
        board.appendChild(row);
        for (let j=0; j<size; j++){
            const column = document.createElement("div");
            column.classList.add("column");
            row.appendChild(column);
        }
    }

}

//Show slider
let slider = document.querySelector("#user-size");

slider.addEventListener("input", ()=>{
    let sliderValue = document.querySelector(".display-size");
    sliderValue.textContent = `${slider.value} x ${slider.value}`;
}
)

//Changing the board size
const sizeBtn = document.querySelector("#board-size-btn");
sizeBtn.addEventListener("click", ()=>{
    let userInput = document.querySelector("#user-size").value;
    if (userInput<0 || userInput>100 || userInput==null || isNaN(userInput)){
        alert("Enter a number between 1 and 100");
    }else{
        sizeOfBoard = userInput;
        removeGrid();
        createBoard(sizeOfBoard);
    }
})

function eraseGrid(){
    const squares = document.querySelectorAll(".column");
    squares.forEach(square => square.addEventListener("mouseenter", (event)=>{
        event.target.style.backgroundColor = "white";
    }))
}

function emptyGrid(){
    const squares = document.querySelectorAll(".column");
    squares.forEach(square => square.style.backgroundColor = "white");

}
function removeGrid(){
    const rows = document.querySelectorAll(".row");
    rows.forEach(row => row.remove())
}


function hover(){
    const squares = document.querySelectorAll(".column");
    squares.forEach(square => square.addEventListener("mouseenter", (event)=>{
        event.target.style.backgroundColor = "rgb(178, 175, 175)";
    }))
}

function getRandomInt() {
    return Math.floor(Math.random() * 255);
}

function rainbowHover(){
    const squares = document.querySelectorAll(".column");
    squares.forEach(square => square.addEventListener("mouseenter", (event)=>{
        event.target.style.backgroundColor = `rgb(${getRandomInt()}, ${getRandomInt()}, ${getRandomInt()})`;
    }))

}

const rstBtn = document.querySelector("#reset-board");
rstBtn.addEventListener("click", emptyGrid);


const eraserBtn = document.querySelector("#eraser");
eraserBtn.addEventListener("click",eraseGrid);

const drawBtn = document.querySelector("#draw");
drawBtn.addEventListener("click", hover);

const rainbowBtn = document.querySelector("#rainbow");
rainbowBtn.addEventListener("click", rainbowHover);


const btnList = document.querySelectorAll(".button");
btnList.forEach(btn => {
    btn.addEventListener("click", ()=>{
        document.querySelector(".selected-button")?.classList.remove("selected-button");
        btn.classList.add("selected-button");
    })
})