
/*
	The Brux Game Engine defines a few functions.
	
	In this file, we re-implement these functions in javascript.
*/

((function () {
	
	let localStorageGuid = "23c49e3e40ae43e7884b2b058cf086c5";

	window.fileExists = function (name) {
		if (window.files[name] !== undefined)
			return true;
		
		if (window.superTuxAdvanceWebVersion.simulatedFileSystem.fileExists(name))
			return true;
			
		try {
			let localStorageResult = localStorage.getItem(localStorageGuid + name);
			if (localStorageResult !== null)
				return true;
		} catch (error) {
			// do nothing
		}
		
		if (name.endsWith(".nut")) {
			if (window.contribScripts[name])
				return true;
		}
		
		return false;
	};
	
	window.fileWrite = function (name, string) {
		try {
			localStorage.setItem(localStorageGuid + name, string);
			
			let localStorageFileKey = localStorageGuid + "localStorageFiles";
			let localStorageFiles = localStorage.getItem(localStorageFileKey);
			if (localStorageFiles === null)
				localStorage.setItem(localStorageFileKey, " " + name + " ");
			else {
				if (localStorageFiles.indexOf(" " + name + " ") < 0)
					localStorage.setItem(localStorageFileKey, localStorageFiles + " " + name + " ");
			}
		} catch (error) {
			// do nothing
		}
	};
	
	window.fileRead = function (string) {
		if (!window.files)
			window.files = {};
		
		if (window.files[string])
			return window.files[string];
		
		try {
			let localStorageResult = localStorage.getItem(localStorageGuid + string);
			if (localStorageResult !== null)
				return localStorageResult;
		} catch (error) {
			// do nothing
		}
		
		throw 'fileRead: did not find file "' + string + '"';
	};
	
	window.fileAppend = function (name, string) {
		console.log("Warning: fileAppend is not implemented");
	};
		
	window.jsonRead = function (string) {
		return JSON.parse(string);
	};

	window.jsonWrite = function (table) {
		return JSON.stringify(table);
	};
	
	window.getdir = function () {
		console.log("Warning: getdir is not implemented");
	};
	
	window.chdir = function (str) {
		console.log("Warning: chdir is not implemented");
	};
	
	window.lsdir = function (str) {

		try {
			let localStorageArray = [];
			let localStorageFileKey = localStorageGuid + "localStorageFiles";
			let localStorageFiles = localStorage.getItem(localStorageFileKey);
			if (localStorageFiles !== null) {
				let localStorageList = localStorageFiles.split(" ");
				for (let i = 0; i < localStorageList.length; i++) {
					if (localStorageList[i].indexOf(str) === 0)
						localStorageArray.push( localStorageList[i].substring( str.length + 1 ) );
				}
			}
			
			if (localStorageArray.length > 0) {
				localStorageArray.push(".");
				localStorageArray.push("..");
				return localStorageArray;
			}
		} catch (error) {
		}

		let returnVal = window.superTuxAdvanceWebVersion.simulatedFileSystem.lsdir(str);
		returnVal.push(".");
		returnVal.push("..");
		
		return returnVal;
	};
		
	window.isdir = function (str) {
		return window.lsdir(str).filter(x => x !== "." && x !== "..").length > 0;
	};
	

	window.dostr = function (str) {
		if (str.startsWith("/*js*/"))
			eval(str);
		else
			console.log("dostr: " + str);
	};

	
})());