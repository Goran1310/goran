
window.onload = function(){
    
    var count = 0;
    var input = document.getElementsByTagName("input");
    
    for(var i = 0; i < input.length; i++){
        console.log("TYPE: " + input[i].type);
        if(input[i].type == "text"){
            count++;
            input[i].style.border = "2px solid red";
            input[i].style.background = "yellow";            
        }
    }    
    console.log("TOTL TEXT TYPE: " + count);
}



function validateForm(){
    var error = false;
    var firstName = document.getElementsByName("fname");
    
    if(firstName[0].value == ""){
        error = true;
        firstName[0].style.border = "2px solid red";
        firstName[0].style.background = "yellow";
        firstName[0].focus()
    }
    
    if(error){
        console.log("Error detected.");
        return false;
    }else{
        return true;
    }
        
}