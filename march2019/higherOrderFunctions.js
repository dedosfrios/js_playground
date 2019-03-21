//Creating a new array with the Object array and the array methods.
let simpleArray = new Array(10).fill().map(ele => ele = Math.floor(Math.random()*10));
//console.log(simpleArray);

/*
//log 10 times the word hello
for (let i = 0; i < 10 ; ++i){
	console.log("hello")
}

//Functio that take a function value as part of 
//its parameters

function repeat (n, action){
	for(let i = 0; i < n; i++){
		action(i)
	}
}

repeat(8,console.log);
*/


function noisy (f){
	return function(...args){
		console.log("calling with ", args);
		let result = f(...args); //closure
		console.log("called with", args, ", returned", result)
		return result;
	}
}

