let rabbit = {};

rabbit.speak = function (line){
	console.log("the rabbit say" + line);
}


// I didnt know you could assing methods creating objects literals
// I thought that you need it to associate it with the .  
function meow (){
	console.log("meow, madafaka im the cat");
}

let cat ={type:"persian",meow}