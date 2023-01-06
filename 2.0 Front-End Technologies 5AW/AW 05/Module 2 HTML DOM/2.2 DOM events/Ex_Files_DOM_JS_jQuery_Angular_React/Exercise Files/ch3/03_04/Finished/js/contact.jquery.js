
$(function(){
   
    //$("input[name='full_name']").on( "keydown", function(){
    //$("input[name='full_name']").on( "keyup", function(){
    $("input[name='full_name']").on( "input", function(){
       
        var intro = "Hello ";
        if($(this).val() == "")
            intro = "";
        
        $("#comment").html( intro + $(this).val() );
    });
    
    $("input[name='email']").on("input",function(){
       
        var domain = "@drdom.com";
        if(($(this).val().indexOf("@") > 0) || $(this).val()=="")
            domain = "";
        $("#comment").html( $(this).val() + domain);
        
    });
    
});