function insertAround() {
    $("#example p").wrap("<div style='border:3px solid red'/>");
    $("#example2 p").wrapAll("<div style='border:3px solid red'/>");
    $("#example3 p").unwrap();
}
function remove() {
    $("#example p.classA").remove();
    $("#example2 p.classB").detach();
    $("#example3").empty();
}
function replace() {
    $("#example p[id]").replaceWith("<div>replaced 1</div>");
    $("<div>replaced 2</div>").replaceAll("#example2 p[id]");
    $("#example3 p").replaceWith(replacement);
}

function replacement() {
    if ($(this).text().indexOf("first") != -1) {
        return "<p>The new first paragraph</p>";
    }
    else {
        return this.outerHTML;
    }
}