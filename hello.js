$(document).ready(function() {
	$("#btnSubmit").click(function(){
        alert("button");
        url_get = "https://api.github.com/repos/angular/angular.js/issues"
        $.ajax({
        url: url_get
    	}).then(function(data) {
    		console.log(data)
       $('.greeting-id').append(data[1].id);
       $('.greeting-content').append(data[2].id);
    });
    });
});
