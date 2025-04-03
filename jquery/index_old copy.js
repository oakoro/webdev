$("h1").click(function() {
    $("h1").css("color", "purple")
});

$("h1").on("mouseover", function() {
    $("h1").css("color","green")
})
// $("h1").css("color","red");

//Add a class
$("h1").addClass("big-title margin-50")

//Select a text
// $("h1").text("Bye")

// $("Button").text("Don't Click Me");
// $("Button").html("<em>Hey</em>")


//Set attribute
// $("img").attri("src")

//option 2 for setting attributes
// $("a").attri("href","https://www.yahoo.com");

$("Button").click(function() {
    $("h1").css("color","purple")
});

//bind key press event listener
//Detect for key strokes
// $("input").keypress(function(event) {
//     console.log(event.key);
// });

$("input").keypress(function(event) {
    $("h1").text(event.key)
});

// Before()
 $("h1").before("<button>New</button>")
// after()
// prepend()
// append()
// $("button").remove()
// $("button").on("click", function() {
//     $("h1").hide()
// })
// $("button").on("click", function() {
//     $("h1").show()
// })
// $("button").on("click", function() {
//     $("h1").toggle()
// })
// $("button").on("click", function() {
//     $("h1").fadeOut();
// })
$("button").on("click", function() {
    $("h1").fadeToggle();
})

$("button").on("click", function() {
    $("h1").animate({margin: "20"})
})

//You can combine merge multiple animation
$("button").on("click", function() {
    $("h1").slideUp().slideDown().animate({opacity: 0.5})
})