// alert("Test");
// //You need to script to html instructions on how to play the game


//You would need an array of words
var wordOptions = ["apartment", "theater", "pyramid", "building", "elephant"];

//other variables/arrays that need to be defined
var userChoice = "";
var loses=0;
var wins=0;
var guesses=13;
var lettersChosen = [];
var wordChosen = "";
var lettersOfWord = [];
var underScore = [];
var lengthWord = 0;

  

function gameOn() {
	//The computer randomly picks a word from the wordOption array
	wordChosen = wordOptions[Math.floor(Math.random() * wordOptions.length)];
	//console.log("Word chosen: " + wordChosen);

	//The computer takes the wordChosen and make turns it into an array 
	lettersOfWord = wordChosen.split("");
	// console.log(lettersOfWord);

	//Have the lettersOfWord array replace the letters with underscores to match number of letters
	lengthWord = wordChosen.length
	for (var x = 0; x < lengthWord; x++) {
		underScore.push("_");
		//console.log(underScore);
	}
	//issues not being able to call variables inside another function
	//found a way to call one variable, but not 2, so it sees
	//word chosen, but not lettersofWord
	// reviewForMatch(wordChosen);

	//print items to html for first time
	document.querySelector("#dashes").innerHTML = underScore.join(" ");
	document.querySelector("#loses").innerHTML = loses;
	document.querySelector("#wins").innerHTML = wins;
	document.querySelector("#guesses").innerHTML = guesses;
	document.querySelector("#lettersChosen").innerHTML = lettersChosen;
	console.log(wordChosen);
}

function reviewForMatch(letter) {
	// console.log("It is checking for match");
	// console.log(wordChosen);
	// console.log(lengthWord);
	// console.log(lettersOfWord); 

//not sure how to do the sound part
	// var SoundUDidIt = (function beep() {
	// 	var snd = new Audio("../youdidit.m4a");
	// 	return function() {     
	//     snd.play(); 
	//   	}
	// });
  
	// var playSoundAwww = (function beep() {
	// 	var snd = new Audio("../Girls.mp3");
	// 	return function() {     
	// 	snd.play(); 
	// 	}
	// });  

//need to have the computer take the user choice and review each letter in the array to see if it is in the word
//find is where the letter from userChoices matches in the wordChosen
	var letterInWord = false;

	for (var i = 0; i < lengthWord; i++) {

		if (wordChosen[i] === letter) {
			letterInWord = true;
			console.log(letterInWord);
		}
	} 

	if (letterInWord) {
		for (var j = 0; j < lengthWord; j++) {
			if (wordChosen[j] === letter) {
				underScore[j] = letter;
			}
		}
		lettersChosen.push(letter);
		console.log(underScore);

		document.querySelector("#dashes").innerHTML = underScore.join(" ");
		document.querySelector("#lettersChosen").innerHTML = lettersChosen;
		console.log(lettersChosen);
		//playSoundUDidIt();


	}

	else {
		console.log("letter not in word");
		//pushes userChoice (users letter input) into array lettersChosen and prints to html
		lettersChosen.push(letter);
		console.log(lettersChosen);
		//write to html letters chosen
		document.querySelector("#lettersChosen").innerHTML = lettersChosen;
		guesses--;
		document.querySelector("#guesses").innerHTML = (guesses);
		//playSoundAwww();
	}
}



function winLossCounter() {
	//need to find out if the array of lettersOfWord matches the underScore to see if user has won the game
	if (lettersOfWord.toString() === underScore.toString()) {
		alert("You've won! The word was " + wordChosen + ".");
		wins++;
		document.querySelector("#wins").innerHTML = wins;
		guesses = 13;
		lettersChosen = [];
		wordChosen = "";
		underScore = [];
		gameOn();
	}

	//if the user letter does not match any of the 
	else if (guesses === 0) {
		console.log("are we getting to loss?");
		alert("You've lost, sad face. The word was " + wordChosen + ".");
		loses++;
		document.querySelector("#loses").innerHTML = loses;guesses = 13;
		lettersChosen = [];
		wordChosen = "";
		underScore = [];
		gameOn();
	}
}	


//call function to start game
gameOn();

//you need to have the user input their letter choice - it needs to be done via html instructions
//This function is run whenever the user presses a key.
document.onkeyup = function(event) {
	
	//determins which key was pressed
	var userChoice = String.fromCharCode(event.keyCode).toLowerCase();
	
	//logs the userChoices to console
	console.log(userChoice);

	//runs the function reviewForMatch to see if the user letter matches any letters in the word chosen
	reviewForMatch(userChoice);

	//runs function to see if user has won or lost so if they have their wins/losses will be increased and the game will reset/restart
	winLossCounter();

};


//do with in word match instead
