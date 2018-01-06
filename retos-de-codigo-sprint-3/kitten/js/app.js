var tarjeta =prompt("ingrese un numero de tarjeta de 16 digitos")
// comprobar que no se ingresen campos vacios impedir que se ingresen valores diferentes a numeros y que no diferente a 16 digitos
do{
if(tarjeta === "" || parsseInt(tarjeta) === NaN || tarjeta.length !==16){
  alert("tarjeta no valida");
}
}while(parseInt(tarjeta) === NaN || tarjeta.length !== 10)
console.log(tarjeta);

//declarando funcion
function luhn (númeroDeTarjeta){
  //.split convierte  un arreglo en un string
  var arregloNumero = numeroDeLaTarjeta.split("");
  arregloNumero= arregloNumero.reverse();
  for(var i=0; arregloNumero.length ; i++)

}
