function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  var cadena = numero+"";
  var longitud = cadena.length;
  console.log(cadena);
  console.log(longitud);
  if(longitud === 3){
    console.log("verdadero");
    return true;
  }else{
    console.log("falso");
    return false;
  }
  
}

tieneTresDigitos(10)
tieneTresDigitos(820)
tieneTresDigitos(900)
