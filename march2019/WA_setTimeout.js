function LateBloomer(){
	this.petalCount = Math.floor(Math.random()*12)+1;
};

LateBloomer.prototype.bloom = function(){
	setTimeout(this.declare.bind(this), 2000);
};

LateBloomer.prototype.declare = function(){
	console.log('I am beatiful and I have ' + this.petalCount +' petals')
};
//let valor = Math.floor(Math.random()*12)+1;
//console.log(valor);

var flower = new LateBloomer();
flower.bloom();