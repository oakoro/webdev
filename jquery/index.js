// $("h1").css("color","red")
// $("h1.get").css("color","red")

// $("button")

$("h1").addClass("big-title");

$("h1").text("Bye")

$("[id=testid").css("background-color","pink")

$("a").attr("href","https://www.yahoo.com")

$("button").attr("id") //Check id available

//Add eventlistener
$("h1").click(function() {
    $("h1").css("color","pink")
})
 
$("button").on("click",function() {
    $("h1").css("color","green")
})

//Add eventlistener to capture click
$("button").keydown(function(event) {
    console.log(event.key);
})

$("input").keydown(function(event) {
    console.log(event.key);
})

$("input").keydown(function(event) {
    $("h1").text(event.key)
})

//animation
$("h1").on("mouseover",function() {
    $("h1").fadeIn(100).fadeOut(100).fadeIn(100);
})

