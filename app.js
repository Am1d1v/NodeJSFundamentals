fs = require('fs');

const data = fs.readFileSync('./data.txt');
console.log(data.toString());

//console.log(global);
//console.log(performance);
console.log(module);