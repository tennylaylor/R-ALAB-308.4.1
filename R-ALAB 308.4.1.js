//    data as a single string
let data = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// Step 2: Split data into rows 
let rows = data.split("\n");


let numberOfColumns = rows[0].split(",").length;  // Count entries in the first row

let formattedData = [];

//  each row and split by commas
for (let i = 0; i < rows.length; i++) {
  let rowArray = rows[i].split(","); // split into  columns
  formattedData.push(rowArray);      
}

//  two-dimensional array for later use
console.log(formattedData);
