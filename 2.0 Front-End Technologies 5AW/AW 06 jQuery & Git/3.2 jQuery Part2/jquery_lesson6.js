function action1() {
    $("div p").replaceWith(replacmentFn) 
}
function replacmentFn() {
    return '<a href="https://youtube.com">' +$(this).text()+'</a>';
}

function action2() {
    $("a").hover(hoverToggelUp,hoverToggelDown)
}
function hoverToggelUp() {
    $(this).css("font-size", "30px");
}
function hoverToggelDown() {
    $(this).css("font-size", "10px")
}
function action3() {
    $("p").fadeOut("slow", "linear");
    $("button").slideUp("slow", "linear")
}

