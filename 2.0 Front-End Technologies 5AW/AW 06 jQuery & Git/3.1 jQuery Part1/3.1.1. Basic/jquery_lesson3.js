$("document").ready(function() {
    $("p:contains('th')").css("font-size", "30px");
    $("p:parent").css("border", "3px dashed blue");
    $("div:has(p[class=classA])").css("border", "3px solid red");
    $("div p:first-child").css("color", "blue");
    $("div p:last-of-type").css("color", "red");
    $("div p:nth-child(3)").css("background-color", "yellow");
    $("div p:nth-child(2n)").css("background-color", "grey");

    // $("p:contains('th'):firist-child").css("background-color", "yellow");
});