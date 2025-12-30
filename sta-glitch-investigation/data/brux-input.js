
/*
	The Brux Game Engine defines a few functions.
	
	In this file, we re-implement these functions in javascript.
*/

((function () {
	
	if (!window.superTuxAdvanceWebVersion)
		window.superTuxAdvanceWebVersion = {};
	
	
	
	
	let keysBeingPressed = [];
	let keysBeingPressedLastFrame = [];
	
	let keyDownHandler = function (e) {
		let key = e.key;
		
		if (key === "Z")
			key = "z";
		if (key === "X")
			key = "x";
		if (key === "A")
			key = "a";
		if (key === "~")
			key = "`";
		
		for (let i = 0; i < keysBeingPressed.length; i++) {
			if (keysBeingPressed[i] === key)
				return;
		}
		
		keysBeingPressed.push(key);
	};
	
	let keyUpHandler = function (e) {
		let key = e.key;
		
		if (key === "Z")
			key = "z";
		if (key === "X")
			key = "x";
		if (key === "A")
			key = "a";
		if (key === "~")
			key = "`";
		
		let newArray = [];
		
		for (let i = 0; i < keysBeingPressed.length; i++) {
			if (keysBeingPressed[i] !== key)
				newArray.push(keysBeingPressed[i]);
		}
		
		keysBeingPressed = newArray;
	};
	
	keyDownHandler({ key: "ArrowRight" });
	keyDownHandler({ key: "Shift" });
	
	//document.addEventListener("keydown", function (e) { keyDownHandler(e); }, false);
	//document.addEventListener("keyup", function (e) { keyUpHandler(e); }, false);
	
	let isKeyPressed = function (k) {
		for (let i = 0; i < keysBeingPressed.length; i++) {
			if (keysBeingPressed[i] === k)
				return true;
		}
		
		return false;
	};
	
	let isKeyPressedLastFrame = function (k) {
		for (let i = 0; i < keysBeingPressedLastFrame.length; i++) {
			if (keysBeingPressedLastFrame[i] === k)
				return true;
		}
		
		return false;
	};
			
	if (!window.superTuxAdvanceWebVersion.functionsToInvokeOnUpdate)
		window.superTuxAdvanceWebVersion.functionsToInvokeOnUpdate = [];
			
	window.superTuxAdvanceWebVersion.functionsToInvokeOnUpdate.push(function () {
		keysBeingPressedLastFrame = [];
		for (let i = 0; i < keysBeingPressed.length; i++) {
			keysBeingPressedLastFrame.push(keysBeingPressed[i]);
		}
	});
	
	
	
	
	window.keyDown = function (key) {
		return isKeyPressed(key);
	};

	window.keyPress = function (key) {
		return isKeyPressed(key) && !isKeyPressedLastFrame(key);
	};

	window.keyRelease = function (key) {
		return !isKeyPressed(key) && isKeyPressedLastFrame(key);
	};

	window.anyKeyPress = function () {
		console.log("Warning: anyKeyPress is not implemented");
	};

	window.mouseX = function () {
		console.log("Warning: mouseX is not implemented");
	};

	window.mouseY = function () {
		console.log("Warning: mouseY is not implemented");
	};

	window.mouseDown = function (b) {
		console.log("Warning: mouseDown is not implemented");
	};

	window.mousePress = function (b) {
		console.log("Warning: mousePress is not implemented");
	};

	window.mouseRelease = function (b) {
		console.log("Warning: mouseRelease is not implemented");
	};

	window.getQuit = function () {
		return false;
	};

	window.joyCount = function () {
		return 0;
	};

	window.joyX = function (id) {
		return 0;
	};

	window.joyY = function (id) {
		return 0;
	};

	window.joyZ = function (id) {
		return 0;
	};

	window.joyH = function (id) {
		return 0;
	};

	window.joyV = function (id) {
		return 0;
	};

	window.joyR = function (id) {
		console.log("Warning: joyR is not implemented");
	};

	window.joyL = function (id) {
		console.log("Warning: joyL is not implemented");
	};

	window.joyAxis = function (id, axis) {
		console.log("Warning: joyAxis is not implemented");
	};

	window.joyHatPress = function (id, direction) {
		return false;
	};

	window.joyHatRelease = function (id, direction) {
		return false;
	}; 

	window.joyHatDown = function (id, direction) {
		return false;
	};

	window.joyButtonPress = function (id, b) {
		return false;
	};

	window.joyButtonRelease = function (id, b) {
		return false;
	};

	window.joyButtonDown = function (id, b) {
		return false;
	};

	window.anyJoyPress = function (id) {
		return -1;
	};

	window.joyName = function (id) {
		console.log("Warning: joyName is not implemented");
	};

	window.joyAxisPress = function (id, axis, deadzone) {
		return 0;
	};

	window.joyAxisRelease = function (id, axis, deadzone) {
		console.log("Warning: joyAxisRelease is not implemented");
	};

	window.keyString = function () {
		console.log("Warning: keyString is not implemented");
	};
})());
