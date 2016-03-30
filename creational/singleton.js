//singleton is used to restrict an object to one instance 
// of that object accross the application.
var Taskrepo = (function(){
	var taskRepo;

	function createRepo() {
		var taskRepo = new Object("Task");
		return taskRepo;
	}

	return {
		getInstance: function(){
			if(!taskRepo) {
				taskRepo = createRepo();
			}
			return taskRepo;
		}
	}
})();

var repo1 = TaskRepo.getInstance();
var repo2 = TaskRepo.getInstance();

if(repo1 == repo2){
	console.log("Same TaskRepo");
}
