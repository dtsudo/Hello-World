
/*
	The Brux Game Engine defines a few functions.
	
	In this file, we re-implement these functions in javascript.
*/

((function () {
	
	let soundIndex = 1;
	let soundIndexMapping = {};
	window.loadSound = function (file) {
		var index = soundIndex;
		soundIndex++;
		
		soundIndexMapping[index] = file;
		
		return index;
	};
		
		
	let musicIndex = 1;
	musicIndexMapping = {};
	window.loadMusic = function (file) {
		var index = musicIndex;
		musicIndex++;
		
		musicIndexMapping[index] = file;
		
		return index;
	};

	window.playSound = function (sound, loops) {
		var file = soundIndexMapping[sound];
		var audioArray = window.audioFiles.audioDictionary[file];
		var audio = audioArray[0];
		for (var i = 0; i < audioArray.length; i++) {
			if (i === audioArray.length - 1)
				audioArray[i] = audio;
			else
				audioArray[i] = audioArray[i+1];
		}
		audio.play();
		if (loops > 0) {
			var repeat;
			repeat = function () {
				if (audio.ended)
					window.playSound(sound, loops-1);
				else
					setTimeout(repeat, 50);
			};
			repeat();
		}
	};

	window.playSoundChannel = function (soundIndex, loops, x) {
		var soundFile = soundIndexMapping[soundIndex];
		window.playSound(soundIndex, loops);
	};

	window.currentlyPlayingMusic = null;
	window.playMusic = function (m, loops) {
		var musicFile = musicIndexMapping[m];
		var music = window.audioFiles.audioDictionary[musicFile][0];
		
		if (window.currentlyPlayingMusic !== null) {
			window.currentlyPlayingMusic.pause();
			window.currentlyPlayingMusic.currentTime = 0;
		}
		window.currentlyPlayingMusic = music;
		
		music.loop = true;
		var promise = music.play();
		
		promise.catch(err => { setTimeout(function() { window.playMusic(m, loops); }, 100); });
	};


	window.deleteSound = function (sound) {
		console.log("Warning: deleteSound is not implemented");
	};

	window.deleteMusic = function (music) {
		console.log("Warning: deleteMusic is not implemented");
	};


	window.checkSound = function (channel) {
		console.log("Warning: checkSound is not implemented");
	};

	window.checkMusic = function () {
		console.log("Warning: checkMusic is not implemented");
	};


	window.stopSound = function (id) {
		console.log("Warning: stopSound is not implemented");
	};


	window.stopChannel = function (channel) {
		console.log("Warning: stopChannel is not implemented");
	};

	window.stopMusic = function () {
		if (window.currentlyPlayingMusic !== null) {
			window.currentlyPlayingMusic.pause();
			window.currentlyPlayingMusic.currentTime = 0;
		}
		window.currentlyPlayingMusic = null;
	};


	window.setMaxChannels = function ( i ) {
		console.log("Warning: setMaxChannels is not implemented");
	};
	
	window.pauseMusic = function () {
		console.log("Warning: pauseMusic is not implemented");
	};

	window.resumeMusic = function () {
		console.log("Warning: resumeMusic is not implemented");
	};
	
	window.musicPaused = function () {
		console.log("Warning: musicPaused is not implemented");
	};
	

	window.fadeMusic = function( time ) {
		if (window.currentlyPlayingMusic !== null) {
			window.currentlyPlayingMusic.pause();
			window.currentlyPlayingMusic.currentTime = 0;
		}
		window.currentlyPlayingMusic = null;
	};


	
})());