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

$(window).resize(function() {
    $(".circle").each(function() {
    $(this).css("top",Math.floor(Math.random()*$(window).height()));
    $(this).css("left",Math.floor(Math.random()*$(window).width()));
    counter++;
    });
});

$(window).scroll(function() {
    console.log($(window).scrollTop());
    $(".sagan").css("opacity",$(window).scrollTop()/100);
    $(".circle").css("width",($(window).scrollTop()/10)+20);
    $(".circle").css("height",($(window).scrollTop()/10)+20);
});
