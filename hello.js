$(document).ready(function() {
    $("#btnSubmit").click(function(){
        alert("button");
        var bla = $('#txt_name').val();
        console.log("Hola " + bla)
        url_get = "https://api.github.com/repos/angular/angular.js/issues/" + bla
        console.log(url_get)
        $.ajax({
        url: url_get
        }).then(function(data) {
            console.log(data)
       $('.greeting-id').append(data.id);
       $('.greeting-content').append(data.id);
    });
    });
});
