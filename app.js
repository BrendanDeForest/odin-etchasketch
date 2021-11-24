console.log("script is running");

const totalColumns = 16;
const totalRows = 16;


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

createGrid(totalColumns,totalRows);