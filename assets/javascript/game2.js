alert("Test");
//You need to script to html instructions on how to play the game


//You would need an array of words
var wordOptions = ["apartment", "theater", "apartment", "building"];

//other variables and that need to be declared
var userChoice = "";
var loses=0;
var wins=0;
var guesses=13;
var lettersChosen = [];
// var lettersWorked = [];
var guessesRemaining = guesses - lettersChosen.length;
var wordChosen = "";
var lettersofWord = [];
var underScore = [];




function gameOn() {
//The computer randomly picks a word from the wordOption array
	wordChosen = wordOptions[Math.floor(Math.random() * wordOptions.length)];
	console.log("Word chosen: " + wordChosen);

	//The computer takes the wordChosen and make turns it into an array 
	var lettersOfWord = wordChosen.split("");
	console.log(lettersOfWord);

	//Have the lettersOfWord array replace the letters with underscores to match number of letters
	var underScore = [];
	var lengthWord = wordChosen.length
	for (var x = 0; x < lengthWord; x++) {
		underScore.push("_");
		console.log(underScore);
	}
	//issues not being able to call variables inside another function
	//found a way to call one variable, but not 2, so it sees
	//word chosen, but not lettersofWord
	reviewForMatch(wordChosen);

	//print items to html for first time
	document.querySelector("#dashes").innerHTML = underScore;
	document.querySelector("#loses").innerHTML = loses;
	document.querySelector("#wins").innerHTML = wins;
	document.querySelector("#guesses").innerHTML = guesses;
	
}

function reviewForMatch() {
//you need to have the computer take the user choice and review each letter in the array to see if it is in the word
//find is where the letter from userChoices matches in the wordChosen
//errors of wordChosen not being found

	var lettersOfWord = wordChosen.split("");
	console.log(wordChosen);
	for (var i = 0; i < wordChosen.length; i++) {
		var find = lettersOfWord.indexOf(userChoice[i]);
		//prints to console if letter matches any letters in wordChosen array and where in array it is
		underScore[find] = userChoice;
			underScore.splice(find, 1, userChoice);
		console.log("Yes, the word has an " + userChoice + " and the index is: " + find);
		console.log(underScore);
	document.querySelector("#dashes").innerHTML = underScore;
	}

		//pushes userChoice (users letter input) into array lettersChosen and prints to html
		lettersChosen.push(userChoice);
		console.log(lettersChosen);
		console.log(lettersChosen.length);
		//write to html letters chosen
		document.querySelector("#lettersChosen").innerHTML = lettersChosen;
		// document.write(lettersChosen);

		//write to html choices left
		//document.write("You have" + (13 - lettersChosen.length) + " guesses left");
		document.querySelector("#guesses").innerHTML = (13 - lettersChosen.length);
		
		// break;
	}

function winLossCounter() {
	//what is counter for knowing that no more dashes in array???
	if (guessesRemaining > 0 && lettersOfWord == underScore) {
		wins++;
		var guesses = 13;
		var lettersChosen = "";
		var userChoice = "";
		document.querySelector("#wins").innerHTML = wins;
	}

	if (guessesRemaining = 0) {
		loses++;
		var guesses = 13;
		var lettersChosen = "";
		var userChoice = "";
		document.querySelector("#loses").innerHTML = loses;

	}
}	



//call function to work game
gameOn();

//you need to have the user input their letter choice - it needs to be done via html instructions
//This function is run whenever the user presses a key.
document.onkeyup = function(event) {
	
	// //determins which key was pressed
	var userChoices = String.fromCharCode(event.keyCode).toLowerCase();
	
	// //logs the userChoices to console
	console.log(userChoices);


	reviewForMatch();
}



