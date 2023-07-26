
function mainFunction(callback){
    let num1 = +prompt("Enter num1 :"); 
    let num2 = +prompt("Enter num2 :");
    callback(num1 , num2); 
}
function exponentiation(num1 , num2){
    let result = num1 ** num2 ;
    alert ( `Result of exp. is ${result}`);
}
mainFunction(exponentiation);

function multiplay(num1 , num2){
    let result = num1 * num2 ;
    alert ( `Result of mult. is ${result}`);
}
mainFunction(multiplay);

function division(num1 , num2){
    let result = num1 / num2 ;
    alert ( `Result of div. is ${result}`);
}
mainFunction(division);

function modulo(num1 , num2){
    let result = num1 % num2 ;
    alert ( `Result of mod. is ${result}`);
}
mainFunction(modulo);