// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  var primer = array[0];
  return primer;
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var long = array.length;
  var ultimo = array[long-1];
  return ultimo;
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  var long = array.length;
  return long;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var long = array.length;
  for (var i = 0; i < long; i++){
    array[i]=array[i]+1;
  }
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var long = palabras.length;
  var frase = "";
  for(var i = 0; i < long; i++){

    var frase = frase + palabras[i] + " ";
  }
  cadena=frase.slice(0,-1);
  return cadena;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var long = array.length;
  var prueba = 0;
  for (var i = 0; i < long; i++) {
    if (array[i] === elemento) {
      prueba = prueba + 1;
    }
  }
  if(prueba > 0){
    return true;
  }else{
    return false;
  }
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var long = numeros.length;
  var valor = 0;
  for (var i = 0; i < long; i++) {
    var valor = valor + numeros[i];
  }
  return valor;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var long = resultadosTest.length;
  var valor = 0;
  for (var i = 0; i < long; i++) {
    var valor = valor + resultadosTest[i];
    var media = valor / long;
  }
  return media;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var max = Math.max(...numeros);
  console.log(max);
  return max;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var long = arguments.length;
  if (long === 0) {
    return 0;
  }else if(long === 1){
    return arguments[0];
  }else{
    var producto = 1;
    for (var i = 0; i < long; i++) {
      var producto = producto*arguments[i];
    }
    return producto;
  }
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var long = arreglo.length;
  var valores = [];
  for (var i = 0; i < long; i++) {
    if (arreglo[i] > 18) {
      valores.push(arreglo[i]);
    }
  }
  var val = valores.length;
  return val;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  switch (numeroDeDia){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      return "Es dia Laboral"; 
      break;
    case 1:
    case 7:
      return "Es fin de semana";
      break;
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var cadena = n + "a";
  var primer = cadena.charAt(0);
  if (primer === "9") {
    return true;
  }else{
    return false;
  }  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var long = arreglo.length;
  var valor = 0;
  for (var i = 0; i < long - 1; i++) {
    if(arreglo[i] !== arreglo[i+1]){
      var valor = 1;
    }
  }
  if (valor === 0) {
    return true;
  }else{
    return false;
  }
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var long = array.length;
  var meses = [];
  for (var i = 0; i < long; i++) {
    if (array[i]==="Enero" || array[i]==="Marzo" || array[i] === "Noviembre") {
      meses.push(array[i]);
    }
  }
  if (meses.length >= 3) {
    return meses;
  }else{
    return "No se encontraron los meses pedidos";
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var long = array.length;
  var mayores = [];
  for (var i = 0; i < long; i++) {
    if (array[i] > 100) {
      mayores.push(array[i]);
    }
  }
  return mayores;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var arreglo = [];
  var valor = 0;
  for (var i = 1; i <= 10; i++) {
    var valor = numero + 2*i;
    if (valor === i) {
      return "Se interrumpió la ejecución";
      break;
    }
    arreglo.push(valor);
  }
  return arreglo;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var arreglo = [];
  var valor = numero;
  for (var i = 1; i <= 10; i++) {
    if (i === 5) {continue;}
    var valor = valor + 2;    
    arreglo.push(valor);
  }
  return arreglo;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
