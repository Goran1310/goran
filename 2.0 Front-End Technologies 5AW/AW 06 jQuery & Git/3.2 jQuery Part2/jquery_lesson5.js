$(function() {
    $("#showButton").click(function() {
        $("p").show("slow")
    });
    $("#hideButton").click(function() {
        $("p").hide("slow", "linear")
    });
    $("#toggleButton").click(function() {
        $("p").toggle("fast", afterCompletion)
    });
});

function afterCompletion() {
    console.log("animation finished");
}