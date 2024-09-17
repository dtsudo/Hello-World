
((function () {
	window.audioFiles.audioDictionary = {};
	
	window.audioFiles.numFilesLoaded = 0;
	window.audioFiles.extraCount = 0;
	window.audioFiles.loadingComplete = false;
	
	for (var i = 0; i < window.audioFiles.audioFileList.length; i++) {
		var fileName = window.audioFiles.audioFileList[i].fileLocation;
		var isSound = window.audioFiles.audioFileList[i].isSound;
		
		window.audioFiles.audioDictionary[window.audioFiles.audioFileList[i].originalName] = [];
		
		var iterationNum = isSound ? 8 : 1;
		
		var soundPath = fileName;
		for (var j = 0; j < iterationNum; j++) {
			if (j > 0)
				window.audioFiles.extraCount++;
			var audio = new Audio(soundPath);
			audio.addEventListener('canplaythrough', function () {
				window.audioFiles.numFilesLoaded++;
				if (window.audioFiles.numFilesLoaded === window.audioFiles.audioFileList.length + window.audioFiles.extraCount)
					window.audioFiles.loadingComplete = true;
			});
			window.audioFiles.audioDictionary[window.audioFiles.audioFileList[i].originalName].push(audio);
		}
	}
})());








window.graphicsDrawColor = 0x000000ff;
window.setDrawColor = function (color) {
	window.graphicsDrawColor = color;
};

window.drawRec = function (x, y, width, height, solid) {
	
	var context = window.superTuxAdvanceCanvasContext;
	
	if (window.canvasTarget !== 0)
		context = window.canvasTextures[window.canvasTarget].getContext('2d');
	
	var red = (window.graphicsDrawColor >> 24) & 0xff;
	var green = (window.graphicsDrawColor >> 16) & 0xff;
	var blue = (window.graphicsDrawColor >> 8) & 0xff;
	var alpha = window.graphicsDrawColor & 0xff;
	
	context.fillStyle = 'rgba(' + red.toString() + ', ' + green.toString() + ', ' + blue.toString() + ', ' + (alpha / 255).toString() + ')';
	context.strokeStyle = 'rgba(' + red.toString() + ', ' + green.toString() + ', ' + blue.toString() + ', ' + (alpha / 255).toString() + ')';
	
	if (solid)
		context.fillRect(x, y, width, height);
	else
		context.strokeRect(x, y, width, height);
};

window.drawRect = window.drawRec;

window.sqrt = function (x) {
	return Math.sqrt(x);
};


window.squirrelForEach = function (expression) {
	
	if (Array.isArray(expression)) {
		var arrayIndex = -1;
		return {
			next: function () { arrayIndex++; },
			isDone: function () { return arrayIndex === expression.length; },
			getKey: function () { return arrayIndex; },
			getValue: function () { return expression[arrayIndex]; }
		};
	}
	
	var keyValuePairs = [];
	for (var prop in expression) {
		if (prop !== "isSubTable" && prop !== "rawin" && prop !== "clear")
			keyValuePairs.push({ k: prop, v: expression[prop] });
	}
	
	var index = -1;
	
	return {
		next: function () { index++; },
		isDone: function () { return index === keyValuePairs.length; },
		getKey: function () { return keyValuePairs[index].k; },
		getValue: function () { return keyValuePairs[index].v; }
	};
};




window.javascriptSetGlobalCompositeOperation = function (val) {
	window.canvasTextures[gvLightScreen].getContext('2d').globalCompositeOperation = val;
};

window.javascriptDrawAmbientLight = function() {
        if (config.light) {
			
			if (!window.lightCanvas) {
		//		window.lightCanvas = document.getElementById('lightCanvas');
			}
			else {
				window.lightCanvasContext = window.lightCanvas.getContext('2d');
				window.lightCanvasContext.drawImage(window.canvasTextures[gvLightScreen], 0, 0);
			}
			
			var context = window.canvasTextures[gvLightScreen].getContext('2d');
			var imageData = context.getImageData(0, 0, 320, 240);
			var imageDataData = imageData.data;
			for (var i = 0; i < imageDataData.length; i += 4) {
				var r = imageDataData[i];
				var g = imageDataData[i+1];
				var b = imageDataData[i+2];
				var a = imageDataData[i+3];
				
				var avg = Math.round((r+g+b)/3);
				imageDataData[i] = 0;
				imageDataData[i+1] = 0;
				imageDataData[i+2] = 0;
				imageDataData[i+3] = 255-avg;
			}
			context.putImageData(imageData, 0, 0);
			drawImage(gvLightScreen, 0, 0);
			
				
		}

    };




window.displayW = function () {
	return 1920;
};

window.displayH = function () {
	return 1080;
};

window.setResolution = function (width, height) {
	// do nothing
};

window.canvasTextures = ["placeholder"];
window.canvasTarget = 0;
window.newTexture = function (width, height) {
	var offscreenCanvas = document.createElement('canvas');
	offscreenCanvas.width = width;
	offscreenCanvas.height = height;
	
	var length = window.canvasTextures.length;
	window.canvasTextures.push(offscreenCanvas);
	return length;
};

window.setDrawTarget = function (img) {
	window.canvasTarget = img;
};


window.resetDrawTarget = function () {
	window.canvasTarget = 0;
};




window.clone = function (x) {
	if (x === null)
		return null;
	
	if (x === undefined)
		return undefined;
	
	if (Array.isArray(x)) {
		var newArray = [];
		for (var i = 0; i < x.length; i++)
			newArray.push(x[i]);
		return newArray;
	}
	
	if (typeof x === "object") {
		return { ... x };
	}
	
	return x;
};





window.squirrelTypeOf = function (obj) {
	if (typeof obj === "object" && obj._typeof)
		return obj._typeof();
	if (Array.isArray(obj))
		return "array";
	if (typeof obj === "object")
		return "table";
	if (typeof obj === "string")
		return "string";
	if (typeof obj === "function" && (obj+"").indexOf("constructor") >= 0)
		return "class";
};

window.max = function (a, b) {
	return a > b ? a : b;
};

window.min = function (a, b) {
	return a < b ? a : b;
};









window.drawImage = function (img, x, y) {
	if (typeof img === "number") {
		var context = window.superTuxAdvanceCanvasContext;
		
		if (window.canvasTarget !== 0)
			context = window.canvasTextures[window.canvasTarget].getContext('2d');
		
		var canvasImage = window.canvasTextures[img];
		if (window.canvasTarget === 0)
			context.drawImage(canvasImage, 0, 0, canvasImage.width, canvasImage.height, x * 3, y * 3, canvasImage.width * 3, canvasImage.height * 3);
		else
			context.drawImage(canvasImage, 0, 0, canvasImage.width, canvasImage.height, x, y, canvasImage.width, canvasImage.height);
	}
	else {
		// TODO
	}
};

window.print = function (str) {
	console.log(str);
};


window.screenW = function () {
	return 320;
};

window.screenH = function () {
	return 240;
};

window.array = function (size, value) {
	var returnVal = [];
	for (var i = 0; i < size; i++)
		returnVal.push(value);
	return returnVal;
};


window.k_up = "ArrowUp";
window.k_down = "ArrowDown";
window.k_left = "ArrowLeft";
window.k_right = "ArrowRight";
window.k_z = "z";
window.k_x = "x";
window.k_a = "a";
window.k_tick = "`";
window.k_lshift = "Shift";
window.k_lctrl = "Control";
window.k_escape = "Escape";
window.k_a = "a";
window.k_enter = "Enter";
window.k_home = "Home";
window.k_end = "End";
window.k_pagedown = "PageDown";
window.k_pageup = "PageUp";
window.k_f1 = "F1_TODO"; // TODO
window.k_f12 = "F12_TODO"; // TODO




window.js_up = "js_up";
window.js_down = "js_down";
window.js_right = "js_right";
window.js_left = "js_left";
window.js_max = 1000;







window.textureSetBlendMode = function (texture, mode) {
	
};

window.bm_norm = "bm_norm";
window.bm_add = "bm_add";
window.bm_sub = "bm_sub";
window.bm_mult = "bm_mult";








window.pi = Math.PI;












