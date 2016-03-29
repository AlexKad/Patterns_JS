
//create object
(function(){
	var app = nagular.module('Task Manager');

	//loads in angular new object Task with constructor and proto functions
	app.factory('Task', function(){
		//constructor for creation object
		var Task = function(data){
			this.name = data.name;
			this.completed = data.completed;

			Task.prototype.complete = function(){
				console.log("complete "+ this.name + " task");
				this.completed = true;
			}

			Task.prototype.save = function(){
				console.log("save " + this.name + " task");
			}
		};
		return Task;	
	});
	
}());

//common
(function(){
	var app = angular.module('taskManager', []);

	var taskController = function(Task){

		var ctrl = this;
		ctrl.tasks = [new Task({name:'task 1', completed:true}), 
					  new Task({name:'task 2', completed:false})];
	};

	app.controller('taskCtrl', taskController);
}())


