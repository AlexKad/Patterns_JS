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



//sub object of task object. Decorate Task with new methods without changing Task

var UrgentTask = function(name, priority){
	Task.call(this, name);
	this.priority = priority;
}

//Bad practice!!! If we set prototypes to each other, 
//        when we change Urgent task methods, it will change Task methods
//UrgentTask.prototype = Task.prototype


//Good practice!! new object
UrgentTask.prototype =  Object.create(Task.prototype);

UrgentTask.prototype.notify = function(){
	console.log('notifying important people');
};

UrgentTask.prototype.save = function(){
	this.notify();
	console.log('do special stuff before saving');
	Task.prototype.save.call(this);
};


var ut = new UrgentTask('Urgent Task', 1);
ut.complete();
console.log(ut);
