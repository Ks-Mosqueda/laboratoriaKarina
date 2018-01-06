## TARJETA VÁLIDA
1. Pedir al usuario que ingrese un numero de tarjeta de crédito con 16 digitos.
2. Validar si ingreso un campo vacio o si fueron letras
- si alguna de las anteriores ocurrieron pido de nuevo el número hasta que se ingrese un número de tarjeta valido
3.- Algoritmo de LUHN
    * Invertir el arreglo
    * Tomar los indices pares del arreeglo.
    * A los indices impares los multiplicamos por digitos
    * Si el resultado es mayor a 10 entonces
       - separar los digitos entre mayores y menores a 10
       - sumar sus digitos
       - Guardar el resultado en la posición del numero original.
       - Si no es mayor a 10 sumarlo al resultado final
