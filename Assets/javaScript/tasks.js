// Check off Specific tasks By Clicking
$("ul").on("click", "li", function() {
   $(this).toggleClass("completed")
});     

// Click on X to delete Todo
// $("span").click(function(event) {
$("ul").on("click", "span", function(event) {
   $(this).parent().fadeOut(500, function() {
	   (this).remove();
	})
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
   if (event.which === 13) {   // 13 is charactere code for enter key
      // grabbing new task text from input
      var taskText = $(this).val();
      $(this).val("");
      // create a new li and add to ul
      $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + taskText+ "</li>")
   }
});

$(".fa-plus-circle").click(function() {
   $("input[type='text").fadeToggle();
});







    