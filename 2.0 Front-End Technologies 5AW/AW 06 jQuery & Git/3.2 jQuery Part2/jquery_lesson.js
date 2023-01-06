// function getInfo() {
//     alert($("#example").html());
//     alert($("p").text());
// }
// function changeDiv() {
//     $("#example").html("New div content.")
// }
// function changeOne() {
//     $("#para1").text("New para1 text")
// }
// function changeClass() {
//     $(".classA").html("<a href='https://google.com'> Now it' link!</a>")
// }

function append() {
    $("#para1").append("APPENDED para1 text.")
}
function prependTo() {
    $("#example p:last").prependTo("#example p:first");
}
function before() {
    $("p").before("------------------")
}
function insertAfter() {
    $("<p>*****************</p>").insertAfter("p")
}