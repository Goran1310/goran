// Make functionalities for these three buttons:
// Button 1 should change all paragraphs having lang attribute set to Bulbasaur images of size: width: 235px, height 220px.

function button1Click() {
    $("p[lang]").html(
        "<img src='https://cdn.pixabay.com/photo/2018/04/13/16/13/pixel-3316924_960_720.png' width='235' height='220'/>")
    }
// Button 2 should add empty button of text “empty button” after Button 1.
function button2Click() {
    $("<button>Empty</button>").insertAfter("button:first")
}

// Button 3 should append the current text of the first paragraph to all paragraph texts.
function button3Click() {
    // $("#example p").append('<p>' +$("#para1").text()+'</p>');       
    $("#example p").append($("#para1").text());       
 }
