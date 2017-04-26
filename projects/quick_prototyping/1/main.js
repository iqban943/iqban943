$(function() {
  for (var dots = 0; dots < 70; dots++){
  $(".wrapper").append("<div class='circle'></div>")
  }

  var counter = 1;

  var sizeVal = (Math.floor(Math.random()*1) + 20) + "px";

  $(".circle").css("width", sizeVal).css("height", sizeVal);

  $(".circle").each(function() {
      $(this).css("top",Math.floor(Math.random()*$(window).height()));
      $(this).css("left",Math.floor(Math.random()*$(window).width()));
      counter++;
  });
});
