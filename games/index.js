var buttonColours = ["red","blue","green","yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;

var level = 0;

$(document).keydown(function() {
    if (!started) {
        $("#level-title").text("Level "+ level);
        nextSequence();
        started = true;
    }
})

$(".btn").on("click", function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour)
    console.log(userChosenColour)
    playSound(userChosenColour)
    
    animatePress(userChosenColour)
})

function nextSequence() {
    level++;
    $("#level-title").text("Level "+level);
    
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber]

    gamePattern.push(randomChosenColour)

    $("."+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    
}


function playSound(e) {
    var audio = new Audio("./sounds/"+e+".mp3")
    audio.play();
}



function animatePress(currentColour) {
    $("#"+currentColour).addClass("pressed");

   setTimeout(function() {
        $("#"+currentColour).removeClass("presses");
   }, 100)}
;
   
// $("."+randomChosenColour).on("click", function() {
//     $("."+randomChosenColour).addClass("pressed");

    
//     playSound(randomChosenColour) ;

// })

// $("."+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

// var userChosenColour = ""
// userChosenColour = $("."+randomChosenColour)
// console.log(userChosenColour);


