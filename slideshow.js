// Write your code here
let img = document.getElementById("images");
let back = document.getElementById("back");
let autoBack = document.getElementById("auto-back");
let forward = document.getElementById("forward");
let autoForward = document.getElementById("auto-forward");
let stopAuto = document.getElementById("stop");

let images = [
	{
		link: "./IMG/Emotional-Vibrational-Scale.png"
	},
	{
		link: "./IMG/Chakras.jpg"
	},
	{
		link: "./IMG/Emotional-Vibrational-Chart.png"
	},
]

let index = 0;

function goForward(array) {
	index = index+1;
	index = index % array.length
	console.log(array[index])
	img.src=array[index].link;
}

function goBackward(array) {
	index--
	if (index<0) {
		index = array.length-1
	}
	console.log(array[index])
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
		goForward(images)}, 1000);
})

autoBack.addEventListener("click", ()=> {
	interval = setInterval(function() {
		goBackward(images)}, 1000);
})

stopAuto.addEventListener("click", ()=> {
	stop();
})