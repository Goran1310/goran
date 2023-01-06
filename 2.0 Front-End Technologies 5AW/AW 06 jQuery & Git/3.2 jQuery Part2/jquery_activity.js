function buttonClick() {
    $("#para1").append($("#para1").text());
    $('<p>' +$("#para1").text()+'</p>').insertAfter("button");
    $('<p>'+ $("#para3").text()+'</p>').insertBefore("#para1")
}