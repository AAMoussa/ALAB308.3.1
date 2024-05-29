// Part 3: Feeling Loopy

const csvFile = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
/*
// Manara code:
const rows = csvFile.split("\n"); //This creates an array which is iterable.

for(let i = 0; i < rows.length; i++)
for()
    console.log(rows[i]);                   //Printing each element in the array rows.
*/

/*
Jourdan code
*/

let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";

let data = "";

for(const c in csvFile){
    if(csvFile[c] !== ","){
        data += csvFile[c]; // filling the data variable with values then reset it later.
    }

    if(csvFile[c] === "," || csvFile === "\n" || Number(c) + 1 === csvFile.length){
        if (!cell1){            // if cells are empty put data in cells then reset data to empty!
            cell1 = data;
            data = "";
        }else if (!cell2){            // if cell2 is empty put data in cells then reset data to empty!
            cell2 = data;
            data = "";
        }else if (!cell3){            // if cell3 is empty put data in cells then reset data to empty!
            cell3 = data;
            data = "";
        }else if (!cell4){            // if cell4 is empty put data in cells then reset data to empty!
            cell4 = data;
            data = "";
        }
    }

    //once cell4  is filled print the cells 
    // clear them for the next iteration
    if (cell1 && cell2 && cell3 && cell4){
        console.log(cell1, cell2, cell3, cell4);
        cell1 = "";
        cell2 = "";
        cell3 = "";
        cell4 = "";

    }





}