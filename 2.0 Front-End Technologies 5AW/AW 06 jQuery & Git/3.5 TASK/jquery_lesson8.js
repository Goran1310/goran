// Make the button slowly fade to 0.4 on double click.

// $(function() {
//     $("#button1").bdlclick(function () {
//         $(this).fadeTo("slow", 0.4);
//     });
// });


// 9. Having the same HTML file as in task 8, make the button slide up on hover.
// $(function() {
//     $("#button1").hover(function () {
//         $(this).slideUp(1000);
//         // $(this).slideDown(1000);

//     });
// });

// Having the same HTML file as in task 8, make the button on click change its width to 200px in 5 seconds.
// $(function() {
//     $("#button1").click(function () {
//         $(this).width(200);
//     })
// })
// Having the same HTML file as in task 8, make the button on click change its width to 200px in 5 seconds.
$(function() {
$( "#button1" ).click(function() {
    $( this ).animate({
        width:'200'
    }, 5000, function() {
      // Animation complete.
    });
  });
})