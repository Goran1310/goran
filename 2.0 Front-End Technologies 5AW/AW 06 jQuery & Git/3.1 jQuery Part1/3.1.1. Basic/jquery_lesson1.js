$("document").ready(function() {
    $("div > p").css("color", "blue"); //child selector.
    $("div p.classA").css("border", "3px solid red");//descendant selector
    $("p + div").css("background-color", "yellow");// adjacent selector
    $("#para3 ~ p").css("font-size", "20px"); // sibling selector
    $("div > p").css("text-align", "right")
});

// https://api.jquery.com/category/selectors/hierarchy-selectors/