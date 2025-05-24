// $(document).ready(function() {
//     $("h1").css("color","forestgreen");
// })

// $("h1").css("color","red");
$("h1").addClass("big-title")

$("h1").click(function () {
    $("h1").css("color","cyan")
})

$("button").click(function () {
    $("h1").css("color","red")
})

$("input").keydown(function (event) {
    $("h1").text(event.key)
})

$("h1").on("mouseover", function () {
    $("h1").css("color","blue")
})

$("button").on("click", function () {
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
})