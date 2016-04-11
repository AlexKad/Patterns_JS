(function(){
	var app = angular.module('taskManager');

	//see TaskRepository creation in creational folder
	// decorator is angular function
	//$delegate here is a TaskRepository
	app.decorator('TaskRepository', function($delegate){
		var oldSave = $delegate.save;
		$delegate.save = function(task){
			console.log('Special logging for task ' + task.name);
			oldSave(task);
		}
		return $delegate;
	})
})