var girls = ["pamela","susan","wendy","alessandra","jenny"];


//cambiar el orden de un Array
function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}


//funcion para cambiar el orden del mismo array (sin producir un nuevo array)
function prueba (cuenta){
	let count = cuenta
	for (let i = 0; i < Math.floor(count/2); i++){
		console.log(i)
	}
}

function hello10times(){
  for(let i = 0 ; i < 10 ; i++){
    console.log("hello")
  }
}