$(document).ready(function() {
    $("#Suma").click(function(){
        var A = $('#txt_A').val();
        var B = $('#txt_B').val();
        console.log("A " + A)
        console.log("B " + B)
        url_get = "http://localhost:5000/api/resta/" + A + "/" + B
        console.log(url_get)
        $.ajax({
	type: "GET",
        url: url_get
        }).then(function(data) {
            console.log("data: " + data)
	    console.log("data.marca " + data.marca)
	    console.log("data.marca.Resultado " + data.marca.Resultado)
       $('#resultado_text').text(data.marca.Resultado);
    });
    });
});
