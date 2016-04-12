var Task = function(data){
	this.name = data.name;
	this.priority = data.priority;
	this.project = data.project;
	this.user = data.user;
	this.completed = data.completed;
}


var TaskService = function(){
	return {
		complete: function(task){
			task.completed = true;
			console.log('completing task ' + task.name);
		};
		setCompleteDate: function(task){
			task.completedDate = new Date();
			console.log(task.name + ' completed ' + task.completedDate);
		};
		notifyCompletion: function(task, user){
			console.log('Notifying '+ user);
		};
		save:function(task){
			console.log('Sving task '+task.name);
		}
	}
}();



var myTask = new Task({
	name: 'MyTask',
	priority:1,
	project:'Learn',
	user:'Alex'
	completed:false
});

//If we want to save and notify task it woludn't be easy
TaskService.complete(myTask);
if(myTask.completed == true){
	TaskService.setCompleteDate(myTask);
	TaskService.notifyCompletion(myTask, myTask.user);
	TaskService.save(myTask);
}


//to simplify this we can use facade pattern
//Wrapper will contain all necessary stuff inside and returns only function
var TaskServiceWrapper = function(){
	var completeAndNotify = function(task){
		TaskService.complete(task);
		if(task.completed == true){
			TaskService.setCompleteDate(task);
			TaskService.notifyCompletion(task, task.user);
			TaskService.save(task);
		}
	}
	return {
		completeAndNotify: completeAndNotify
	}
}()


//so that if we want to save and notify task we just need to call this wrapper function
//looks much easier because all realization inside wrapper
TaskServiceWrapper.completeAndNotify(myTask); 


