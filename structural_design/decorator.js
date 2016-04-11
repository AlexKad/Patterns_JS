var Task = function(name){
	this.name = name;
	this.completed = false;
}

Task.prototype.complete = function(){
	console.log('completing task ' + this.name);
	this.completed = true;
};

Task.prototype.save = function(){
	console.log('Saving task '+ this.name);
};

var myTask = new Task('Legacy Task');
myTask.complete();
myTask.save();


var urgentTask = new Task('Urgent Task');

//Decorate Task object with priority and notifying
// new functionality doesn't break the functionality 
//of the inital object
urgentTask.priority = 2;
urgentTask.notify = function(){
	console.log('notifying important people');
};
urgentTask.save = function(){
	this.notify();
	Task.prototype.save.call(this.save);
};
urgentTask.save();
