const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
let score = 0;
let recordValue = 0;

document.addEventListener("keydown", function(event) { 
	jump(); 
});

function jump() {
	if (dino.classList != "jump") {
		dino.classList.add("jump");
	}
	setTimeout(function (){
		dino.classList.remove("jump");
	}, 350)
}

setInterval(function () {
	let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
	let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

	document.querySelector('#score').innerHTML = "Score: " + score;	
	score += 1;

	if(cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 135) {
		if (recordValue < score) {
			recordValue = score-2;
		}

		score = 0;
		alert("GAME OVER! Record: " + recordValue);
	}		

}, 100);



