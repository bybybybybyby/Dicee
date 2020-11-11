var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var dice1Image = "images\\dice" + randomNumber1 + ".png";
var dice2Image = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", dice1Image);
document.querySelector(".img2").setAttribute("src", dice2Image);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw! 🙌";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
