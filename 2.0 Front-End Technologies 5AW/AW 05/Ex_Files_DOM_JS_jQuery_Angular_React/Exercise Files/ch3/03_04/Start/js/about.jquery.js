
$(document).ready(function(){
   
    $("div.team-member").click(function(e){
       
        var action = $("input[name=action]:checked").val();
        // action = before | after
        
        if(action == "before"){
            $("#moveme").insertBefore(this);
        }else if(action == "after"){
            $("#moveme").insertAfter(this);
        }else if(action == "delete"){
           // e.currentTarget.remove();
            this.remove();
        }        
        
    });
    
    
    
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