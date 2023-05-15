//punto uno

alert("un mensaje");

//punto dos

document.write("Hello Word.  ");

//punto tres

document.write(" El resultado de sumar 3+5 es igual a " +  (3+5));

//punto cuatro 

let nombre = prompt ("Escribe tu nombre");

document.write("  Hola  "  +  nombre);

//punto cinco 

let numeroUno = prompt ("Escribe un numero");
let numeroDos = prompt ("Escribe otro numero");
document.write(" el resultado de numeroUno y numeroDos es " + (parseInt(numeroUno) + parseInt(numeroDos))) ;

//punto seis

let a = prompt("Escribe primer numero");
let b = prompt("Escribe segundo numero");

if ((parseInt(a)) > (parseInt(b))) 
{
    document.write("el numero mayor es el " + a);
}
else 
{
    document.write("el numero mayor es el " + b);
}

