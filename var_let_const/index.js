/*
variableName1 = 1
var variableName2 = 2
let variableName3 = 3
const variableName4 = 4


console.log(variableName1)
console.log(variableName2)
console.log(variableName3)
console.log(variableName4)
*/
/*
var x = 10; // vorsicht var nur in ausnahmefällen verwenden
            // var ist global, und das wollen wir nicht
            // es überschreibt global
if(true){
    let x = 2;
    console.log(x)
}
console.log(x)
*/
///////////////////////////////
/*
var y = 10

if(true){
    var y = 2;
}
console.log(y)
*/

/*
var carDreckig = true;
if(true){
    let carDreckig = false;
} 
console.log(carDreckig);
*/

/*
const x = 10;
x++; // x = x+1
console.log(x)
*/

var carDreckig = true;

function waschanlage(){
    let carDreckig = false
    return carDreckig
    /*
    if(carDreckig){
        return false;
    }else{
        console.log("das auto ist schon sauber")
        return false;
    }*/
}
console.log( waschanlage() );
console.log(carDreckig)