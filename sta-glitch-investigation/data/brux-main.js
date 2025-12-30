
/*
	The Brux Game Engine defines a few functions.
	
	In this file, we re-implement these functions in javascript.
*/

((function () {
	
	let frameCounter = 0;
	let startingTickCount = Date.now();
	
	window.update = function () {
		if (!window.superTuxAdvanceWebVersion)
			window.superTuxAdvanceWebVersion = {};
		
		if (!window.superTuxAdvanceWebVersion.functionsToInvokeOnUpdate)
			window.superTuxAdvanceWebVersion.functionsToInvokeOnUpdate = [];
		
		for (let i = 0; i < window.superTuxAdvanceWebVersion.functionsToInvokeOnUpdate.length; i++) {
			window.superTuxAdvanceWebVersion.functionsToInvokeOnUpdate[i]();
		}
		
		frameCounter++;
	};

	window.getOS = function() {
		return "web";
	};

	window.wait = function (ticks) {
		console.log("Warning: wait is not implemented");
	};

	window.donut = function (script) {
		window.contribScripts[script]();
	};

	window.getFrames = function () {
		return frameCounter;
	};

	window.getTicks = function () {
		return Date.now() - startingTickCount;
	};

	window.getFPS = function () {
		return 60;
	};

	window.setFPS = function (num) {
		// do nothing
	};

	window.setWindowTitle = function (str) {
		// do nothing
	};

	window.setWindowIcon = function (filename) {
		// do nothing
	};

	window.bruxVersion = function () {
		return "v.0.2.4";
	};
})());
