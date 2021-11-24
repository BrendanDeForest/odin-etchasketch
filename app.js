console.log("script is running");

let totalColumns = 16;
let totalRows = 16;


function createCell() {
    //Assigns newDiv to creation of div element
    const newDiv = document.createElement("div");

    newDiv.style.width = "25px";
    newDiv.style.height = "25px";
    newDiv.style.border = "1px solid black";
    newDiv.style.float = "left";

    //On hover, change background to black
    newDiv.onmouseover = function() {
        newDiv.style.background = "#000";
    }

    // add the newly created element and its content into the DOM
    document.getElementById("container").appendChild(newDiv);
}

function createRow() {
    //Assigns newDiv to creation of div element
    const newDiv = document.createElement("div");

    //Resets float
    newDiv.style.clear = "both";

    // add the newly created element and its content into the DOM
    document.getElementById("container").appendChild(newDiv);
}

function createGrid(totalColumns, totalRows){
    for (let r = 0; r < totalRows; r++){
        //Creates columns
        for (let i = 0; i < totalColumns; i++){
            createCell();
        };

        //Creates Row
        createRow();

    };
};

function clearGrid() {
    //Removes all Divs from container
    let elem = document.getElementById("container");
    elem.innerHTML = "";

    //Asks user how many squares for new grid.  Sets max to 100 squares.
    let totalSquaresPerSide = prompt("How many squares per side would you like?");
    while (totalSquaresPerSide > 100){
        alert("This is too many squares. To prevent issues, please use a number <= 100.");
        totalSquaresPerSide = prompt("How many squares per side would you like?");
    }

    //Creats new grid
    totalRows = totalSquaresPerSide;
    totalColumns = totalSquaresPerSide;
    createGrid(totalColumns,totalRows);
};

createGrid(totalColumns,totalRows);


// Need to figure out how to make cells on each row fill container width.