// $(function() {
//     $("#para1").hover(function() {
//         $(this).fadeTo("slow", "0.2")
//     });
//     $("#para1").hover(function() {
//         $(this).fadeIn("slow")
//     });
// });
$(function() {
$( "#para1").hover(function() {
    $( this ).fadeOut( 100 );
    $( this ).fadeIn( 5000 );
  })
});
