// document.querySelector("button").addEventListener("click",handleClick);

function handleClick() {
  alert("I got click!");
}

//Detecting button press

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  // document.querySelectorAll("button")[i].addEventListener("click",playSound);
  // document.querySelectorAll(".drum")[i].addEventListener("click", function () {console.log(this.innerHTML)})
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // console.log(this.style.color = "white")
    
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML)
    
  });
}
 
//Detecting keyboard press

document.addEventListener("keydown", function() {

  makeSound(event.key);
})

function makeSound(key) {

  switch (key) {
    case "w":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;

    case "a":
      var kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;

    case "s":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;

    case "d":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;

    case "j":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;

      default: console.log(buttonInnerHTML)
  }

}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  },100
);
}

// document.addEventListener("keydown", function() {
//   alert("Key was pressed")
  
// });
// callback function - console logging event that trigger the function
// syntax
//function name(typeofevent, callback){
// var eventThatHappened = {
//  eventtype: "keydown",
//  key: "p",
//  durationOfKeydown: 2
// }if (eventThatHappened === typeOfEvent){
//  callback(eventThatHappened);}
//  }

// document.addEventListener("keydown", function(event) {
//   console.log(event)
  
// });

// function playSound() {
//     var audio = new Audio("./sounds/tom-1.mp3");
//     audio.play();
// }

// document.querySelectorAll("button")[1].addEventListener("click",handleClick);
// document.querySelectorAll("button")[2].addEventListener("click",handleClick);
// document.querySelectorAll("button")[3].addEventListener("click",handleClick);
// document.querySelectorAll("button")[4].addEventListener("click",handleClick);
// document.querySelectorAll("button")[5].addEventListener("click",handleClick);
// document.querySelectorAll("button")[6].addEventListener("click",handleClick);

// var houseKeeper1 = {
//     yearsOfExperience: 12,
//     name: "Jane",
//     cleaningExperience: ("bathroom","lobby","bedroom")
// }

// function BellBoy(name, age, hasWorkPermit, languages) {
//     this.name = name;
//     this.age = age;
//     this.hasWorkPermit = hasWorkPermit;
//     this.languages = languages;
//     this.clean = function () {
//         alert("Cleaning in progress")
//     }
// }

// function HouseKeeper(yearsOfExperience,name,cleaningExperience) {
//     this.yearsOfExperience = yearsOfExperience;
//     this.name = name;
//     this.cleaningExperience = cleaningExperience;
// }