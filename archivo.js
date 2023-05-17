//punto uno

/*alert("un mensaje");

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

//punto siete 

 let uno = prompt("Escribe primer numero");
 let dos = prompt("Escribe segundo numero");
 let tres = prompt("Escribe tercero numero");
 
 
if ((parseInt(uno)) > (parseInt(dos)) && (parseInt(uno)) > (parseInt(tres))) 
{
    document.write("el numero mayor es el " + uno);
}
else if ((parseInt(dos)) > (parseInt(uno)) && (parseInt(dos)) > (parseInt(tres))) 
{
    document.write("el numero mayor es el " + dos);
}
else 
{
    document.write("el numero mayor es el " + tres);
}

//punto ocho 
let num1  = prompt("Escribe un numero");

if ((parseInt(num1)) % 2 == 0) {
    document.write("el numero " + num1 + " es divisible por 2");
}
else
{
    document.write("el numero " + num1 + " no es divisible por 2");
}



//punto nueve

let frase = prompt("Escribe una frase");


for (let i = 0; i < frase.length; i++) 
{
    let letra = frase.charAt(i);

    if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u" || 
        letra == "A" || letra == "E" || letra == "I" || letra == "O" || letra == "U"  ) 
    {
        document.write(letra);
    } 
}


//punto diez

let num1  = prompt("Escribe un numero");

if ((parseInt(num1)) % 2 == 0 ) {
    document.write("el numero " + num1 + " es divisible por 2");
}
else if ((parseInt(num1)) % 3 == 0 ) {
    document.write("el numero " + num1 + " es divisible por 3");
}
else if ((parseInt(num1)) % 5 == 0 ) {
    document.write("el numero " + num1 + " es divisible por 5");
}
else if ((parseInt(num1)) % 7 == 0 ) {
    document.write("el numero " + num1 + " es divisible por 7");
}
else
{
    document.write("el numero " + num1 + " no es divisible por 2,3,5,7");
}

*/

//punto once

let num1  = prompt("Escribe un numero");

if ((parseInt(num1)) % 2 == 0 ) 
{
    document.write("el numero " + num1 + " es divisible por 2 ");
}
if ((parseInt(num1)) % 3 == 0 ) 
{
    document.write("el numero " + num1 + " es divisible por 3 ");
}
if ((parseInt(num1)) % 5 == 0 ) 
{
    document.write("el numero " + num1 + " es divisible por 5 ");
}
if ((parseInt(num1)) % 7 == 0 ) 
{
    document.write("el numero " + num1 + " es divisible por 7 ");
}
else
{
    document.write("el numero " + num1 + " no es divisible por 2,3,5,7");
}

