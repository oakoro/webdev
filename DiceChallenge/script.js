var dice1 = Math.floor((Math.random()*6)+1);
var img1 = "./images/dice"+dice1+".png"

var dice2 = Math.floor((Math.random()*6)+1);
var img2 = "./images/dice"+dice2+".png"

//Option 1
// document.querySelector(".img1").src = img1
// var dice2 = Math.floor((Math.random()*6)+1);
// var img2 = "./images/dice"+dice2+".png"
// document.querySelector(".img2").src = img2

//Option 2
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",img1)

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",img2)

if (dice1 > dice2) {
    document.querySelector("h1").innerHTML= "Player 1 Wins"
}
else if (dice2 > dice1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins"
}
else {document.querySelector("h1").innerHTML =  "It a draw!"}
