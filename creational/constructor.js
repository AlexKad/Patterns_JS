
//constructor for creation object
var Task = function(name){
	this.name = name;
	this.completed = false;

	this.complete = function(){
		console.log("complete "+ this.name + " task");
		this.completed = true;
	}

	this.save = function(){
		console.log("save " + this.name + " task");
	}
}


//different instances of object Task
var task1 = new Task("create a demo for constructor");
var task2 = new Task("create a demo for modules");
var task3 = new Task("create a demo for singleton");