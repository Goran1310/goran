
//Standard JS
var targetFrankie = document.getElementById("frankie");
var countFrankie = 0;

function countfrankie(){
    var txt  = "<p>Counter: " + countFrankie++ + "</p>";
    txt += "<p>HR Department</p>";
    targetFrankie.innerHTML = txt;
}

setInterval(countfrankie,1000);

//ReactJS

var targetDon = document.getElementById("don");
var countDon = 0;

function countdon(){
    ReactDOM.render(
        <div>
            <p>Counter: {countDon++}</p>
            <p>IT Department</p>
        </div>
        ,
        targetDon
    );
}

setInterval(countdon,1000);






