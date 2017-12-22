
/*fORMA DE DECLARAR FUNCTION EXPRESSION
var nameVariable = function nameFunction/*aL NO TENER NOMBRE se le conoce como función anonima
(parametrosOpcionales){ //FUNCTION EXPRESSION
  instrucciones a ejecutar
}; //importante colocar el punto y coma como BUENA PRACTICA

/*FORMA DE DECLARAR: FUNCTION STATEMENT O FUNCTION DECLARATION *
function /* PALABRA RESERVADA* nameFunction /*NOMBRE DE LA FUNCION* (){
  //iNSTRUCCIONES A EJECUTAR
}
/*por default arrojaran undefined
para indicar que queremos que devuelva debemos usar return e indicarle que queremos que devuelva*/
//EJEMPLO
//saludo ("Inti");
/*
despedida("Yesenia")
var saludo = function (nombre){//FUNCTION EXPRESION

  return "Hola" + nombre;
}
// La function expresion no puede usarse antes de ser definida

function despedida(nombre){//FUNCTION STATEMENT

  return "Adios " + nombre;
}
//Las function statement si puede usarse antes de ser declarada, siempre estara disponible

var numero = 128;

function comprobar(){
  if(numero % 2 === 0){
    return "par";
  }
  else{
       return "impar";
       }
       }

       comprobar();
       */
var firstDigit = parseInt(prompt("ingresa el primer digito"));// el parseInt se debe colocar para que se haga la suma y no solo concaTENE
//PORQUE EL PROMPT DEVUELVE UN STRING POR DEFAULT
var secondDigit = parseInt(prompt("ingresa el segundo digito"));
var operation = parseInt(prompt("\t \t selecciona la operacion que quieres realizar: \n  1. Suma \n 2. multiplicación \n 3. resta \n 4. división"  ));

function calculator(operation){//funcion principal para ejecutar las operaciones
switch (operation){ //evaluamos la operacion a realizar
  case 1://caso para la suma
  sum(firstDigit,secondDigit);
  break;
  case 2: //caso para la multiplicacion
  multiply(firstDigit,secondDigit);
  break;
  case 3: //caso para la resta
  substraction(firstDigit,secondDigit);
  break;
  case 4
  division(firstDigit,secondDigit);
  break;
  default: //cuando no cumple con ninguna condicion
  alert("ingrese una frase correcta");
  break;
  }

}

function sum(firstDigit,secondDigit){
  var result = firstDigit + secondDigit;//esta variable almacena los datos del prompt
  return document.write("El resultado de la suma es " firstDigit + "+" + secondDigit + result + "<br>");

}

function multiply(firstDigit,secondDigit) {
  var result = firstDigit * secondDigit;
  return document.write("El resultado de la multiplicación es " + result + "<br>");
}

function substraction(firstDigit,secondDigit) {
  var result = firstDigit - secondDigit;
  return document.write("El resultado de la resta es " + result + "<br>");
}

function división(firstDigit,secondDigit) {
  var result =firstDigit % secondDigit;
  return document.write("El resultado de la división es " + result + "<br>");
}

calculator(operation)
