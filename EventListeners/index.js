
document.addEventListener("keydown", function(event) {
    // alert("Key is pressed")
    console.log(event.key);
    // var audio = new Audio("../DrumKit/sounds/crash.mp3");
    // audio.play();
    makeSound(event.key);

})


function makeSound(key) {

    switch (key) {
        case "w":
            var audio = new Audio("../DrumKit/sounds/snare.mp3");
            audio.play();
            break;
        case "t":
            var audio = new Audio("../DrumKit/sounds/tom-1.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("../DrumKit/sounds/kick-bass.mp3");
            audio.play();
            break;
        case "c":
            var audio = new Audio("../DrumKit/sounds/crash.mp3");
            audio.play();
            break;
        default:
            break;
    }
    
    
}

