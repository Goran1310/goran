//1
$(document).ready(function() {
    // sets the background colour of all elements having any class, to green.
    $("[class]").css("background-color","green");
    // changes the font size of all paragraphs inside div to 20px
    $("div > p").css("font-size","20px");
    // adds 10px of left padding to all paragraphs that are even children of their parent and have the lang attribute specified
    $("p[lang]:even").css("padding-left","120px");
    // adds text-decoration: line-through; to all paragraphs that are even from all children of their parent having the lang attribute specified.
    $("p:even[lang]").css("text-decoration","line-through");
})
