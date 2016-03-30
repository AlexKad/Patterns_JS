(function(){}(
	var app = angular.module('taskManager');

	var taskRepo = function($http){

		var db = {};

		var get = function(id) {
			console.log('Getting task '+ id);
			return {
				name: 'new task from db'
			}
		}

		var save = function(task){
			console.log('Saving ' + task.name + 'to the db');
		}

		//taskRepo would work like a module
		return {
			get: get,
			save: save
		}
	}

	app.service('TaskRepository', taskRepo);
))


//create object
(function(){
	var app = nagular.module('Task Manager');

	//use Task repository module
	app.factory('Task', function(TaskRepository){
		//constructor for creation object
		var Task = function(data){
			this.name = data.name;
			this.completed = data.completed;

			Task.prototype.complete = function(){
				console.log("complete "+ this.name + " task");
				this.completed = true;
			}

			Task.prototype.save = function(){
				TaskRepository.save(this);
			}
		};
		return Task;	
	});
	
}());