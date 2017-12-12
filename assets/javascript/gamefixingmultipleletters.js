//You would need an array of words
var wordOptions = ["apart", "goose"];

//other variables and that need to be declared
var userChoice = "";
var loses=0;
var wins=0;
var guesses=13;
var lettersChosen = [];
// var lettersWorked = [];
// var guessesRemaining = guesses - lettersChosen.length;


//need to call wins loses to html for first time
document.querySelector("#wins").innerHTML = wins;
document.querySelector("#loses").innerHTML = loses;
//You would need the computer to randomly pick a word
		var wordChosen = wordOptions[Math.floor(Math.random() * wordOptions.length)];
		console.log("Word chosen: " + wordChosen);

		//You need to have the computer take the word and make it into an array 
		var lettersOfWord = wordChosen.split("");
		console.log(lettersOfWord);

		//you need to have the new array put underscores for number of letters in the array use: var arrayLength = myFarm.length;

		var underScore = [];
		for (var x = 0; x < wordChosen.length; x++) {
			underScore.push("_");
			console.log(underScore);
		}

		//prints underScore for first time to html
		document.querySelector("#dashes").innerHTML = underScore.join(" ");
		

		//you need to have the user input their letter choice - it needs to be done via html instructions 

		// This function is run whenever the user presses a key.
    	document.onkeyup = function(event) {
			
			//determins which key was pressed
			var userChoices = String.fromCharCode(event.keyCode).toLowerCase();
			
			
			//logs the userChoices to console
			console.log(userChoices);


		//you need to have the computer take the user choice and review each letter in the array to see if it is in the word
		//try using indexof
			
			//dani had this in a separate function
			var letterInWord = false;
			for (var i=0; i < wordChosen.length; i++) {
				if (find >=0) {
					find = true;
				}
			
			if (letterInWord)
				for (var i = 0; i < wordChosen.length; i++) {
					if (wordChosen[i] == userChoice) {
						underScore[i] = letter;
						lettersChosen.push(userChoices);
						console.log(lettersChosen);
						document.querySelector("#lettersChosen").innerHTML = lettersChosen;
						//do not subtract from guesses here as they chose correctly
					}
					//this is original code from game.js
					// var find = lettersOfWord.indexOf(userChoices[i]);
					// 	console.log("Yes, the word has an " + userChoices + " and the index is: " + find);
					// 	underScore[find] = userChoices
	 			// 		underScore.splice(find, 1, userChoices);
					// 	document.querySelector("#dashes").innerHTML = underScore.join(" ");
					// 	console.log(underScore);	
					
					//} else { - dani used this

			} else if (wordChosen[i] < 0) {
						// index of < 0 
						// then go through rest - below

						//so here is where subtract #of guesses
					// this is where I was working to see if I coulf figure out how to make it push through all the letters
					// if (i = wordChosen.length)
						lettersChosen.push(userChoices);
						console.log(lettersChosen);
						console.log(lettersChosen.length);
						//write to html letters chosen
						document.querySelector("#lettersChosen").innerHTML = lettersChosen;
						// document.write(lettersChosen);

						//write to html choices left
						//document.write("You have" + (13 - lettersChosen.length) + " guesses left");
						guesses--;
						document.querySelector("#guesses").innerHTML = (guesses);
						break;

			}
		}