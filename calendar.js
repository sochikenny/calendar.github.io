$(document).ready(function(){

//var save = $(".saveBtn");  

//for (var i = 0; i < save.length; i++)

    $(".saveBtn").on("click", function(event){
    event.preventDefault();

    var userinput = $(".textarea");
    var eventplacement = $(".events");
        
        eventplacement.text(userinput);

    });

    
















});