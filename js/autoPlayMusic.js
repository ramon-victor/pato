function playMusic() {
	const audio = new Audio("files/without-me.wav");
	audio.autoplay = true;
	audio.loop = true;

	audio.play();
}

window.onload = function () {
	playMusic();
};
