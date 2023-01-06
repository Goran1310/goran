
$(document).ready(function(){
   
    $("#btnShowNames").click(function(){
       var names = "";
       $(".team-name").each(function(){
           names += $(this).text() + "\n";  //<br>
       });        
        $("#result").html(names);        
    });
    
    $("#btnHideNames").click(function(){
        $("#result").html("");
    });
    
    $(".team-member").on("click",function(e){
        $("#result").html(e.currentTarget.children[1].textContent);
    });
    
});