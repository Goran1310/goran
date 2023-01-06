window.onload = function(){
    
    var fromComment = document.getElementById("comment");
    var toLiveUpdate = document.getElementById("live-update");
    
    fromComment.onkeydown = function(){
        toLiveUpdate.value = this.value;
        console.log(toLiveUpdate.value.length);
    }
    
    
    var btnBefore = document.getElementById("btnBefore");
    btnBefore.addEventListener("click",function(){
        
       var newNode = document.createElement("p");
        newNode.innerHTML = "<i>*** New Patients Only ***</i>";
        newNode.setAttribute("id","newnode");
        
        var formGroup = document.getElementsByClassName("form-group");
        formGroup[0].insertBefore(newNode,formGroup[0].lastElementChild);
        
    });
    
    var btnAfter = document.getElementById("btnAfter");
    btnAfter.addEventListener("click",function(){
       
        var btnClear = document.createElement("button");
        btnClear.setAttribute("type","reset");
        btnClear.setAttribute("class","btn btn-lg");
        var textClear = document.createTextNode("Clear");
        btnClear.appendChild(textClear);
        
        var formGroup = document.getElementsByClassName("form-group");
        var len = formGroup.length;
        formGroup[len-1].appendChild(btnClear);        
    });
    
    
    var btnDelete = document.getElementById("btnDelete");
    btnDelete.addEventListener("click",function(){
      
        var formGroup = document.getElementsByClassName("form-group");
        formGroup[0].lastElementChild.remove();
                                       
   });
    
    
    
    
    
    
    
    
    
    
    
    
    
              
}