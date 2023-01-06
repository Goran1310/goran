
function effectOn(id){
    var member = document.getElementById(id);
    var memberName = member.nextElementSibling.innerHTML;
    member.classList.add("selected");
    console.clear();
    showName(memberName,"ON");
}

function effectOff(id){
    var member = document.getElementById(id);
    var memberName = member.nextElementSibling.innerHTML;
    member.classList.remove("selected");
    showName(memberName,"OFF");
}

function showName(name,status){
    console.log("Effect: " + status + " for " + name);
}
