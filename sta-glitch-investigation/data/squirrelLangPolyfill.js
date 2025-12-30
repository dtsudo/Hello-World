
Array.prototype.len = function () {
	return this.length;
};

Array.prototype.remove = function (index) {
	let returnVal = this[index];
	this.splice(index, 1);
	return returnVal;
};

Array.prototype.top = function () {
	return this[this.length - 1];
};


Boolean.prototype.tointeger = function () {
	if (this.valueOf())
		return 1;
	return 0;
};


Number.prototype.tofloat = function () {
	return this;
};

Number.prototype.tointeger = function () {
	return parseInt(this.toString(), 10);
};

Number.prototype.tostring = function () {
	return this.toString();
};


Object.prototype.clear = function () {
	let properties = [];
	for (var prop in this) {
		if (this.hasOwnProperty(prop))
			properties.push(prop);
	}
	for (let i = 0; i < properties.length; i++) {
		delete this[properties[i]];
	}
};

Object.prototype.rawin = function (x) {
	return this[x] !== undefined;
};


String.prototype.find = function (s) {
	let returnVal = this.indexOf(s);
	if (returnVal >= 0)
		return returnVal;
	return null;
};

String.prototype.len = function () {
	return this.length;
};

String.prototype.tochar = function () {
	return this;
};

String.prototype.tofloat = function () {
	return parseFloat(this);
};

String.prototype.tointeger = function () {
	if (this.startsWith("0x"))
		return parseInt(this.substring(2));
	return parseInt(this, 10);
};

String.prototype.tostring = function () {
	return this;
};


window.cos = function (x) {
	return Math.cos(x);
};

window.getroottable = function () {
	return window;
};

window.sin = function (x) {
	return Math.sin(x);
};

window.split = function (stringToDivide, separatorChar) {
	let arr = [];
	
	while (true) {
		let index = -1;

		for (let i = 0; i < separatorChar.length; i++) {
			let x = stringToDivide.indexOf(separatorChar.substring(i, i+1));
			if (index === -1 || x < index && x !== -1)
				index = x;
		}
		
		if (index < 0) {
			if (stringToDivide.length > 0)
				arr.push(stringToDivide);
			break;
		}
		if (index !== 0)
			arr.push(stringToDivide.substring(0, index));
		
		stringToDivide = stringToDivide.substring(index+1);
	}
	
	return arr;
};

window.strip = function (str) {
	return str.trim();
};

window.tan = function (x) {
	return Math.tan(x);
};
