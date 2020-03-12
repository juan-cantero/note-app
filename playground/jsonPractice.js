const fs = require('fs');

//read the json file into a buffer object
let dataJsonBuffer = fs.readFileSync('juan.json');

// get the string from it
let dataJsonString = dataJsonBuffer.toString();

//parse the string to an object (the string has to have json format)
let juan = JSON.parse(dataJsonString);

// modify the object
juan.name = 'juan carlos';

// convert the object into json 
let jsonString = JSON.stringify(juan);

// write the json file
fs.writeFileSync('juan.json', jsonString);