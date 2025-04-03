var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern;

function nextSequence() {
  var randomNumber = Math.round(Math.random() * 3);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  //   var audio = new Audio("sounds/"+randomChosenColour+".mp3");
  //   audio.play();
  playSound(userChosenColour);
}

nextSequence();

$(".btn").on("click", function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
});

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
