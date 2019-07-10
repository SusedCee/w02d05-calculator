console.log("hey"); //with help from Miriam

var buttons = document.querySelectorAll('#calculator span'); //refers to all of the buttons numbers, operators and decimal
var operators = ['+', '-', 'x', '÷']; //divided by symbol from google
var decimalAdded = false; //the decimal does not show up unless clicked

for(var i = 0; i < buttons.length; i++) { //options are all of the buttons
	buttons[i].onclick = function(e) { //if buttons are clicked
		var input = document.querySelector('.screen'); //display on screen all of the buttons pressed
		var inputVal = input.innerHTML; //the number in screen is put in inputVal
		var btnVal = this.innerHTML; 
		if(btnVal === 'C') { //if user pressed the C to clear
			input.innerHTML = ''; //replace what is shown with a space to show a blank
			decimalAdded = false; //no decimal
		}
		
		else if(btnVal === '=') { //when user presses the equals sign
			var equation = inputVal; // equation is the input from user
			var lastChar = equation[equation.length - 1]; // take off the = sign
			equation = equation.replace(/x/g, '*').replace(/÷/g, '/'); //changing the characters so the computer is able to recognize the symbol for multiplication and division- g means global
			if(operators.indexOf(lastChar) > -1 || lastChar == '.') // if the last character is greater than negative one or equal to decimal
				equation = equation.replace(/.$/, ''); //replace the last character with space https://stackoverflow.com/questions/36630230/replace-last-character-of-string-using-javascript
			if(equation) 
				input.innerHTML = eval(equation); //put the equation in the input bar
			decimalAdded = false;
		}

		else if(operators.indexOf(btnVal) > -1) { //when the user presses the operator buttons

			var lastChar = inputVal[inputVal.length - 1]; //
			
			if(inputVal != '' && operators.indexOf(lastChar) == -1) // when the input value is not empty and operator last character is -1
				input.innerHTML += btnVal; //add to button value
			else if(inputVal == '' && btnVal == '-') // if the input is equal to blank, and the button value is minus
				input.innerHTML += btnVal; // add to button value
			if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) { //if number is greater than -1 and input value is greater than 1
				input.innerHTML = inputVal.replace(/.$/, btnVal); //replace the last character with btnValue https://stackoverflow.com/questions/36630230/replace-last-character-of-string-using-javascript
			}
			decimalAdded =false; 
		}
		
		else if(btnVal == '.') { //if the button value is a decimal
			if(!decimalAdded) { //if no decimal added
				input.innerHTML += btnVal; //input to btnValue
				decimalAdded = true; 
			}
		}

		else {
			input.innerHTML += btnVal; //add button value  in the input
		}
		
		e.preventDefault(); // https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault    and     https://api.jquery.com/event.preventdefault/
	} 
}