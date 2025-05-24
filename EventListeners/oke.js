
for (var i = 0; i < document.querySelectorAll(".surname").length; i++){
    document.querySelectorAll(".surname")[i].addEventListener("keydown", function (e) {
        // console.log(e.key)
        var key = e.key;

        switch (key) {
            case "a":
                // console.log("you pressed "+key);
                document.querySelector("."+key).style.backgroundColor="pink";
                break;
            case "k":
                // console.log("you pressed "+key);
                document.querySelector("."+key).style.backgroundColor="black"
            case "o":
                document.querySelector("."+key).style.color="forestgreen"
            case "r":
                document.querySelector("."+key).classList.add("dimmer")
            case "o":
                document.querySelectorAll(".surname")[4].style.backgroundColor="darkmagenta"
            default:
                break;
        }
    })
}

document.querySelector("h1").addEventListener("click", function() {
    document.querySelector("h1").innerHTML = "Welcome to my website"
})