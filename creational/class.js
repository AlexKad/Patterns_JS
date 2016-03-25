//ecma 2015 allows to create classes with constructors

'use strict'

class Task {
	constructor(name){
		this.name = name;
		this.completed = false;		
	};

	complete(){
		console.log("complete "+ this.name + " task");
		this.completed = true;
	};

	save(){
		console.log("save " + this.name + " task");
	};
}


//different instances of object Task
var task1 = new Task("create a demo for constructor");
var task2 = new Task("create a demo for modules");
var task3 = new Task("create a demo for singleton");