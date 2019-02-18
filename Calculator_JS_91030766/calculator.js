
function add() {
	var num1 = parseInt(document.getElementById("num1").value);
	var num2 = parseInt(document.getElementById("num2").value);
	var result = (num1 + num2);
	document.getElementById("display").innerHTML = (num1 + " + " + num2 + " = " + result);
}

function subtract() {
	var num1 = parseInt(document.getElementById("num1").value);
	var num2 = parseInt(document.getElementById("num2").value);
	var result = (num1 - num2);
	document.getElementById("display").innerHTML = (num1 + " - " + num2 + " = " + result);
}

function multiply() {
	var num1 = parseInt(document.getElementById("num1").value);
	var num2 = parseInt(document.getElementById("num2").value);
	var result = (num1 * num2);
	document.getElementById("display").innerHTML = (num1 + " * " + num2 + " = " + result);
}

function divide() {
	var num1 = parseInt(document.getElementById("num1").value);
	var num2 = parseInt(document.getElementById("num2").value);
	var result = (num1 / num2);
	document.getElementById("display").innerHTML = (num1 + " / " + num2 + " = " + result);
}

function modulus() {
	var num1 = parseInt(document.getElementById("num1").value);
	var num2 = parseInt(document.getElementById("num2").value);
	var result = (num1 % num2);
	document.getElementById("display").innerHTML = (num1 + " % " + num2 + " = " + result);
}

function clear() {
	document.getElementById("num1").value = '';
	document.getElementById("num2").value = '';
	document.getElementById("display").innerHTML = '';
}

function exit() {
	document.getElementById("display").innerHTML = 'Goodbye!.';
	var delay = 1000;
	setTimeout(function() {
	}, delay);
	while (document.getElementById("calculator").hasChildNodes()) {
		document.getElementById("calculator").removeChild(document.getElementById("calculator").lastChild);
}
}

function action(obj) {
	var key = obj.value;
	var num1 = parseInt(document.getElementById("num1").value);
	var num2 = parseInt(document.getElementById("num2").value);
	if (key == "Exit") {
		exit();
	}

	else if (isNaN(num1) || isNaN(num2)) {
		document.getElementById("display").innerHTML = 'Input two numbers, then choose a function xox';
	}
	else if (key == "+") {
		add();
	}
	else if (key == "-") {
		subtract();
	}
	else if (key == "*") {
		multiply();
	}
	else if (key == "/") {
		divide();
	}
	else if (key == "%") {
		modulus();
	}
	else if (key == "C") {
		clear();
	}
	else {
		document.getElementById("display").innerHTML = 'Invalid Input.';
	}
}
