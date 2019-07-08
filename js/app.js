console.log("hey");

var decimalBtn = document.getElementById("decimal")
var clearBtn = document.getElementById("clear");
var displayElement = document.getElementById("display");
var performNumberButtons = document.getElementsByClassName("btnNumber");
var calcOperators = document.getElementsByClassName("btnOperator");

var valueOnScreen = "0";
var valueWaiting;
var stringArray = [];


for (let i = 0; i < performNumberButtons.length; i++) {
	performNumberButtons[i].addEventListener("click", updateDisplay, false);
}

// for(let i = 0; i < performNumberButtons.length; i++) {    // switch????????? More info https://www.w3schools.com/js/js_switch.asp
// 	calcOperators[i].addEventListener("click", doOperation, false);	
// }

var performTheMath = (clickObj) => {
var operator = clickObj.target.innerText;

}


var updateDisplay = (clickObj) => {
	var btnText = clickObj.target.innerText;
	if (valueOnScreen === "0")
		valueOnScreen = "";
	valueOnScreen += btnText;
	displayElement.innerText = valueOnScreen;
}

clearBtn.onClick = () => {
	valueOnScreen = "0";
	valueWaiting = undefined;
	stringArray = [];
	displayElement.innerHTML = valueOnScreen;
}

decimalBtn.onClick = () => {
	if(!valueOnScreen.includes("."))
		valueOnScreen += ".";
		displayElement.innerText = valueOnScreen;
}





