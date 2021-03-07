// Write your code here
let img = document.getElementById("images");
let description = document.getElementById("text");
let back = document.getElementById("back");
let autoBack = document.getElementById("auto-back");
let forward = document.getElementById("forward");
let autoForward = document.getElementById("auto-forward");
let stopAuto = document.getElementById("stop");

let images = [
	{
		description: "How you feel is how you vibrate",
		link: "./IMG/Emotional-Vibrational-Scale.png"
	},
	{
		description: "The better your feelings the higher your energy",
		link: "./IMG/Emotional-Vibrational-Chart.png"
	},
	{
		description: "Chakras and Energy connection",
		link: "./IMG/Chakras.jpg"
	},
	{
		description: "Balance Your Chakras With Solfeggio Frequencies",
		link: "./IMG/SolfeggioandChakras.jpg"
	}
]

let index = 0;

function goForward(array) {
	index = index+1;
	index = index % array.length
	//console.log(array[index])
	description.innerText = array[index].description;
	img.src=array[index].link;
}

function goBackward(array) {
	index--
	if (index<0) {
		index = array.length-1
	}
	//console.log(array[index])
	description.innerText = array[index].description;
	img.src=array[index].link
}

let interval;

function stop(){
	clearInterval(interval);
}

forward.addEventListener("click", () => {
	goForward(images);
})

back.addEventListener("click", ()=> {
	goBackward(images);
})

autoForward.addEventListener("click", ()=> {
	interval = setInterval(function() {
		goForward(images)}, 1200);
})

autoBack.addEventListener("click", ()=> {
	interval = setInterval(function() {
		goBackward(images)}, 1200);
})

stopAuto.addEventListener("click", ()=> {
	stop();
})