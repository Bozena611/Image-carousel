// Write your code here
let img = document.getElementById("images");
let back = document.getElementById("back");
let autoBack = document.getElementById("auto-back");
let forward = document.getElementById("forward");
let autForward = document.getElementById("auto-forward");
let stop = document.getElementById("stop");

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

function moveImages(array) {
	index = index+1;
	index = index % array.length
	console.log(array[index])
	img.src=array[index].link;
}

forward.addEventListener("click", () => {
	moveImages(images);
})