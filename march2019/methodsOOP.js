let rabbit = {};

rabbit.speak = function (line){
	console.log("the rabbit say" + line);
}


// I didnt know you could assing methods creating objects literals
// I thought that you need it to associate it with the .  
function meow (){
	console.log("meow, madafaka im the cat");
	console.log(this);
}

let cat ={type:"persian",meow}

//We cant use a declare function and use the call method on that function
//to determinate from which object the this variables is gonna take is value


let Cars = function (name,speedlimit,engine,sound){
	this.name = name;
	this.speedlimit = speedlimit;
	this.engine = engine;
	this.skrt = function(sound){Fu
		console.log(sound);
	}
}

let audi2000 = new Cars("audi2000",350,"V8","brrrrrmmmmm");