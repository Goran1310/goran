// Create a jquery_lesson.js file which hides all paragraphs on their click
// $(function (){
//     $("p").click(function (){
//         $(this).hide(1000);
//     })
// })
// $(function (){
//     $("p").click(function (){
//         $(this).show(1000);
//     })
// })
$(function (){
$("p").click(function(){
    $("p").toggle("slow");
  })
});
