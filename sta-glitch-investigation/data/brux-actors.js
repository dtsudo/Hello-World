
/*
	The Brux Game Engine defines a few functions.
	
	In this file, we re-implement these functions in javascript.
*/

((function () {
	
		
	let actorIdGenerator = 0;
	window.actor = {};
		
	window.Actor = function () {
		var returnVal = {
			run: function () {},
			x: 0,
			y: 0,
			id: 0,
			sprite: 0
		}
		returnVal["frame"] = 0;
		
		returnVal.constructor = function (x, y) { returnVal.x = x; returnVal.y = y; };
		
		return returnVal;
	};

	window.newActor = function (type, x, y, arr) {
		if (arr === undefined)
			arr = null;
		
		var actorArgs = [x, y];
		
		//if (Array.isArray(arr)) {
		//	for (var i = 0; i < arr.length; i++)
		//		actorArgs.push(arr[i]);
		//}
		//else
		//	actorArgs.push(arr);
			
		//var newActor = type(...actorArgs);
		
		var newActor;
		if (arr !== undefined && arr !== null)
			newActor = type(x, y, arr);
		else
			newActor = type(x, y);
		
		var id = actorIdGenerator;
		actorIdGenerator++;
		newActor.id = id;
		
		var actorType = window.squirrelTypeOf(newActor);
		if (!window.actor[actorType])
			window.actor[actorType] = { isSubTable: true };
		window.actor[actorType][id] = newActor;
		
		
		window.actor[id] = newActor;
		
		return id;
	};

	window.deleteActor = function (id) {
		if (!window.actor[id])
			return;
		
		var actorType = window.squirrelTypeOf(window.actor[id]);
		delete window.actor[actorType][id];
		delete window.actor[id];
	};

	window.runActors = function () {
		for (var a in window.actor) {
			if (window.actor.hasOwnProperty(a) && !window.actor[a].isSubTable)
				window.actor[a].run();
		}
	};

	window.countActors = function () {
		var count = 0;
		for (var a in window.actor) {
			if (window.actor.hasOwnProperty(a) && !window.actor[a].isSubTable)
				count++;
		}
		return count;
	};

	window.checkActor = function (id) {
		return !!window.actor[id];
	};
	
})());