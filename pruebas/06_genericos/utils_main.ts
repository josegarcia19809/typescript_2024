import {printObject, genericFunction, genericFunctionArrow} from "./utils";


const name = "José García";
console.log(genericFunction(3.14).toFixed(2));
console.log(genericFunctionArrow(name).toUpperCase());
console.log(genericFunctionArrow(new Date()).getDate());

console.log()
printObject(new Date().getFullYear());
printObject(name);
printObject(3.1416);