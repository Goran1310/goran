// Create a jquery_lesson.js file that makes our On button add an event that hides all paragraphs on click and an Off button removing this event.
// $(function (){
//     $('#onButton').click(function () {
//         $('p').show();
//     });
//     $('#offButton').click(function () {
//         $('p').hide();
//     })
// })

$(function() {
    $("#onButton").click(function () {
        $("p").click(hide);
    });
    $("#offButton").click(function () {
        $("p").off("click", hide);
});
function hide() {
    $(this).hide();
}
});