//prototype is an encapsulation of properties that an object links to

var Task = function(name){
	//we create new field for every new instance
	this.name = name;
	this.completed = false;	
}


//every instance of Task object links to this particular function. 
//Only one function for all instances
Task.prototype.complete = function(){
	console.log("complete "+ this.name + " task");
	this.completed = true;
}

Task.prototype.save = function(){
	console.log("save " + this.name + " task");
}

//different instances of object Task
var task1 = new Task("create a demo for constructor");
var task2 = new Task("create a demo for modules");
var task3 = new Task("create a demo for singleton");