$("document").ready(function() {
    // Create a jquery_lesson.js file that selects the paragraph containing “Th” and is the first of its type. Set its background colour to yellow.
    $("p:contains('Th'):first-of-type").css("background-color", "yellow");
});