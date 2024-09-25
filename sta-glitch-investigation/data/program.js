
((function () {
	
	window.isWebBrowserVersion = true;
	
	window.stopGame = false;
	
	var urlParams = (new URL(document.location)).searchParams;
				
	var unlockAllLevels = urlParams.get('unlocklevels') !== null
		? (urlParams.get('unlocklevels') === 'true')
		: true;
		
	var invulnerable = urlParams.get('invulnerable') !== null
		? (urlParams.get('invulnerable') === 'true')
		: true;
	
	var debugCommands = function () {
		
		if (invulnerable) {
			if (game.health > 0)
				game.health = game.maxHealth;
		}
		
		if (unlockAllLevels) {
			game.completed["0-0"]=true;
			game.completed["0-1"]=true;
			game.completed["0-2"]=true;
			game.completed["0-3"]=true;
			game.completed["0-4"]=true;
			game.completed["0-5"]=true;
			game.completed["0-6"]=true;
			game.completed["0-5"]=true;
			game.completed["0-5"]=true;
			game.completed["0-6a"]=true;
			game.completed["0-6b"]=true;
			game.completed["0-7"]=true;
			game.completed["0-8"]=true;
			game.completed["0-9"]=true;
			game.completed["Fw-1"]=true;
			game.completed["Fw-2"]=true;
			game.completed["Fw-3"]=true;
			game.completed["Fw-3b"]=true;
			game.completed["Fw-4"]=true;
			game.completed["Fw-5"]=true;
			game.completed["Fw-6"]=true;
			game.completed["Fw-7"]=true;
			game.completed["Fw-8"]=true;
			game.completed["Fw-9"]=true;
			game.completed["Fw-t0"]=true;
			game.completed["Fw-t1"]=true;
			game.completed["Fw-t2"]=true;
			game.completed["Fw-t3"]=true;
		}
	};
	
	var startGame = function () {
		var computeAndRenderNextFrame;
		var fps = 60;
							
		var nextTimeToAct = Date.now() + (1000.0 / fps);
		
		computeAndRenderNextFrame = function () {
			var now = Date.now();
			
			if (nextTimeToAct > now) {
				setTimeout(computeAndRenderNextFrame, 5);
				return;
			}
			
			if (nextTimeToAct < now - 5.0*(1000.0 / fps))
				nextTimeToAct = now - 5.0*(1000.0 / fps);
			
			nextTimeToAct = nextTimeToAct + (1000.0 / fps);
			
			if (window.keyPress(window.k_escape) && levelEndRunner == 0 && gvGameMode != gmMain)
				togglePause();
			
			window.superTuxAdvanceCanvasContext.fillStyle = 'rgba(0, 0, 0, 1)'
			window.superTuxAdvanceCanvasContext.fillRect(0, 0, 960, 720);
			gvGameMode();
		
			
			
			window.update();
			
			debugCommands();
				
			if (!window.stopGame)
				setTimeout(computeAndRenderNextFrame, 0);
		};

		setTimeout(computeAndRenderNextFrame, 0);
	};
	
	var waitForLoadToCompleteThenStartGame;
	
	waitForLoadToCompleteThenStartGame = function () {
		if (!window.superTuxAdvanceCanvas) {
			window.superTuxAdvanceCanvas = document.getElementById('canvas');
			if (!window.superTuxAdvanceCanvas) {
				setTimeout(waitForLoadToCompleteThenStartGame, 100);
				return;
			}
			window.superTuxAdvanceCanvasContext = window.superTuxAdvanceCanvas.getContext('2d');
		}
		
		window.superTuxAdvanceCanvasContext.imageSmoothingEnabled = false;
		
		if (window.superTuxAdvanceWebVersion.imageLoadingComplete && window.audioFiles.loadingComplete) {
			for (var i = 0 ; i < window.jsFiles.length; i++)
				window.jsFiles[i]();
			
			startMain();
			menu = meMain
			config.playerchar = "Tux";
			
			startGame();
			
			setTimeout(function () { startPlay(game.path + "0-1" + ".json"); window.stopGame = true; }, 100);
		} else
			setTimeout(waitForLoadToCompleteThenStartGame, 100);
	};
	
	setTimeout(waitForLoadToCompleteThenStartGame, 0);
	
	setTimeout(function () {
		document.getElementById("nextFrameButton").addEventListener("click", function () {
			
			window.superTuxAdvanceCanvasContext.fillStyle = 'rgba(0, 0, 0, 1)'
			window.superTuxAdvanceCanvasContext.fillRect(0, 0, 960, 720);
			gvGameMode();
			window.update();
			
			let a = gvPlayer.shape;
			let b = { x:152, w:8, h:4,y:964 };
			document.getElementById("myTextarea").value = "Tux x-location: " + gvPlayer.shape.x + "\n"
				+ "Tux y-location: " + gvPlayer.shape.y + "\n"
				+ "Tux width: " + gvPlayer.shape.w + "\n"
				+ "Tux height: " + gvPlayer.shape.h + "\n"
				+ "Sloped tile x-location: 152 \n"
				+ "Sloped tile width: 8 \n"
				+ "\n"
				+ "Value of (a.x - a.w): " + (gvPlayer.shape.x - gvPlayer.shape.w) + "\n"
				+ "Value of (b.x + b.w): " + (152+8) + "\n"
				+ "Value of ((a.x - a.w) - (b.x + b.w)): " + ( ((gvPlayer.shape.x - gvPlayer.shape.w)) - (152+8)   ) + "\n"
				+ "Value of ((a.y + a.h) - (b.y + b.h)) / ((a.x - a.w) - (b.x + b.w)): " + (((a.y + a.h) - (b.y + b.h)) / ((a.x - a.w) - (b.x + b.w)));
		});
	}, 100);
	
	
})());

