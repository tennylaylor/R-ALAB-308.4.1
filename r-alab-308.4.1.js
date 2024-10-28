//    data as a single string
let data = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// Step 2: Split data into rows 
let rows = data.split("\n");


let numberofrows = rows[0].split(",").length;  // Count entries in the first row

let formatteddata = [];

//  each row and split by commas
for (let i = 0; i < rows.length; i++) {
  let rowarr = rows[i].split(","); // split into  columns
  formatteddata.push(rowarr);      
}

//  two-dimensional array for later use
console.log(formatteddata);


//=======================part 3===================//


let headings = formatteddata[0];
let objects = [];


for (let i = 1; i < formatteddata.length; i++) {   // Loop through columns
  let rowobject = {}; 
  for (let j = 0; j < headings.length; j++) {
    rowobject[headings[j].toLocaleLowerCase()] = formatteddata[i][j]; // Assign lowercase and headings to data
  }
  objects.push(rowobject); // Add the row object to the array
}

// test objects
console.log(objects);

/// ==================part 4 ===============//
let removeend = objects.pop(); //remove last row//

//console.log(objects);  //Remove to activeate.

let newobject = { id: "48", name: "Barry", occupation: "Runner", age: "25" }; //new row to insert

objects.splice(1,0, newobject); // insert new row

console.log(objects); // updated row


let nuuobject = { id: "7", name: "Bilbo", occupation: "None", age: "111" }; // add new object

objects.push(nuuobject);

console.log(objects);


//=========== Part  4 B ==========//

let totalage = 0; //initializer for age

for (let i=0; i < objects.length; i++) { // loop for age sum
  totalage += Number(objects[i].age);
}
let averageage= totalage/objects.length;

console.log(averageage);

//==============part 5 ========//
