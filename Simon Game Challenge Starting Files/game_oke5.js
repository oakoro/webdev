// alert("Hey")



var buttonColours = ["red","blue","green","yellow"]
var gamePattern = []
var userClickedPattern = [];

function playSound(sound) {
    var audio = new Audio("sounds/"+ sound +".mp3");
    audio.play();
}

function animatePressed(colour){
    $("#"+colour).addClass("presssed");

    setTimeout(function () {
        $("#" + colour).removeClass("pressed");
    }, 100);
    }

    
   

function nextSequence() {

    var randomNumber = Math.floor(Math.random()*4)
    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour)
    // alert(randomChosenColour);

    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100)
        
    
    
    playSound(randomChosenColour);

    // $("."+randomChosenColour).on("click",function() {
    //     playSound(randomChosenColour);
    // })

    $("."+randomChosenColour).on("click",function() {
        // var audio = new Audio("sounds/"+randomChosenColour+".mp3");
        // audio.play();
        playSound(randomChosenColour);
        
    })

    $("."+randomChosenColour).addClass("presssed")

    $(".btn").on("click",function() {
        var userChosenColour = $(this).attr("id");
        userClickedPattern.push(userChosenColour)
        animatePressed(userChosenColour);
    })

    
}
   

nextSequence();

$(".btn").on("click",function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour)
    animatePressed(userChosenColour);
})







// $(".btn").on("click",function() {
//     var audio = new Audio("red.mp3");
//      audio.play();
// })

// $(".btn").on("click",function() {
//     var audio = new Audio("red.mp3");
//      audio.play();
// })

// alert(userChosenColour)
// alert(gamePattern)

// $("h1").on("click",function() {
//     var audio = new Audio("red.mp3");
//     audio.play();
// })