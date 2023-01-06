$("document").ready(function() {
        // sets the background colour of all elements having any class, to green.
    $("[class]").css("background-color", "green");
        // changes the font size of all paragraphs inside div to 30px
    $("div > p").css("font-size", "30px");
        // adds 10px of left padding to all paragraphs that are even children of their parent and have the lang attribute specified
    $("p[lang]:even").css("padding-left", "10px"); 
    // adds 10px of top padding to all paragraphs that are even from all children of their parent having the lang attribute specified.
    $("p:even[lang]").css(("padding-top", "10px"));
});