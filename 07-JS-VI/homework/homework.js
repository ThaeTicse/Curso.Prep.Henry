// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  return nombre[0].toUpperCase() + nombre.slice(1) 
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  cb()
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1,n2)
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  //El método reduce() ejecuta una función reductora sobre cada elemento de un array
  //devolviendo como resultado un único valor

  let sumaNE = numeros.reduce(function(acc,ne){
    return acc + ne
  },0)

  cb(sumaNE)
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  // El metodo forEach() llama funcion callback especifica una vez por cada elemento
  // sobre el que itera dentro de un arreglo.
  let iArr = array.forEach(function(v){
    return cb(v)
  })

  return iArr
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  // map() es una función que te permite transformar los elementos de una lista y te devuelve una nueva lista
  let newArr = array.map(function(v){
    return cb(v)
  })
  return newArr
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  //El metodo filter() consiste en filtrar uno o más elementos
  // de una colección mas grande de elementos basandose en 
  // alguna condición
  
  let filtro = array.filter(function(e){
    if(e[0] === 'a'){
      return e
    }
  }) 
  return filtro
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};