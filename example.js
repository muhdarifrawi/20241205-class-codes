const prompt = require("prompt-sync")();

let length = parseFloat(prompt("Enter length: "));
let breadth = parseFloat(prompt("Enter breadth: "));

function rectangleParameter(l,b){
    let parameter = 2 * (l + b);
    return parameter;
}

let parameter = rectangleParameter(length,breadth);

console.log("Parameter of rectangle is", parameter.toString());

