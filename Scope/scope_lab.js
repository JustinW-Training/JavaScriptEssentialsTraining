// Globale scope
var globalVar = "Ik ben een globale variabele";
let globalLet = "Ik ben ook globaal, maar scoped met let";
const globalConst = "Ik ben een globale constante";

console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"

{
// Blok scope
var blockVar = "Ik ben een blok-scoped var";
let blockLet = "Ik ben een blok-scoped let";
const blockConst = "Ik ben een blok-scoped const";
}

// console.log(blockVar);
// console.log(blockLet);

function show(){
var functionVar = "Ik ben een block-gebonden var";
let functionLet = "Ik ben een block-gebonden let";
const functionConst = "Ik ben een block-gebonden const";
}
show();

console.log(functionVar); // Geeft ReferenceError
console.log(functionLet); // Geeft ReferenceError
console.log(functionConst); // Geeft ReferenceError