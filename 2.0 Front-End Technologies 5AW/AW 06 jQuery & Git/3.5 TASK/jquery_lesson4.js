$("document").ready(function() {
    // Select the para3 element and, using traversing, change the first ‘paragraph’s’ background colour to yellow and the fourth paragraph’s to blue.
    var elem = $("#para3");
    elem.prev().prev().css("background-color", "yellow");
    elem.next().css("background-color", "blue");
});