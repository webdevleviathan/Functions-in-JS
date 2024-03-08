//-----------------------Functions ---- Example -------------------
 'use strict';


function logger(){
console.log('my name is XAN');    
}
//calling //running //invoking function
logger();
logger();

function fruitProcesor(apples, oranges){
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
const appleJuice = fruitProcesor(5, 0);
console.log(appleJuice);

const appleOrangejuice = fruitProcesor(2, 4);
console.log(appleOrangejuice);
