console.log("hey");

var oneBtn = document.getElementById("numberOne");
var twoBtn = document.getElementById("numberTwo");
var threeBtn = document.getElementById("numberThree");
var fourBtn = document.getElementById("numberFour");
var fiveBtn = document.getElementById("numberFive");
var sixBtn = document.getElementById("numberSix");
var sevenBtn = document.getElementById("numberSeven");
var eightBtn = document.getElementById("numberEight");
var nineBtn = document.getElementById("numberNine");
var zeroBtn = document.getElementById("numberZero");
var decimalBtn = document.getElementById("decimal")
var clearBtn = document.getElementById("clear");
var displayElement = document.getElementById("display")


var valueOnScreen = "0";
var valueWaiting;
var stringArray =[];

var performNumberButtons = document.getElementsByClassName("calcbtn");
var calcOperators = document.getElementByClassName("btnOperator");

for(leti = 0; i < performNumberButtons.length; i++) {
	performNumberButtons[i].addEventListener(click, updateDisplay, false);
}

for(leti = 0; i < performNumberButtons.length; i++) {
	calcOperators[i].addEventListener(click, doOperation, false);	
}

var updateDisplay = (clickSomething) => {
	var btnInput = clickSomething.target.innerText;
	if (displayValues === "0")
		valueOnScreen = "";
	displayValues += btnInput;
	displayElement.innerText = valueOnScreen;
}
