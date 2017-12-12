// alert("Test");
// //You need to script to html instructions on how to play the game


//You would need an array of words
var wordOptions = ["apartment", "theater", "pyramid", "building", "elephant"];
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
	//reset variables here instead of at winsLossCounter or else won't work
	var guesses = 13;
	// var lettersChosen = [];
	// var userChoice = "";
	// // var wordChosen = "";
	// var underScore = [];
	// var lengthWord = 0;
	
	//The computer randomly picks a word from the wordOption array
	wordChosen = wordOptions[Math.floor(Math.random() * wordOptions.length)];
	//console.log("Word chosen: " + wordChosen);

	//The computer takes the wordChosen and make turns it into an array 
	lettersOfWord = wordChosen.split("");
	// console.log(lettersOfWord);

	//Have the lettersOfWord array replace the letters with underscores to match number of letters
	// var underScore = [];
	lengthWord = wordChosen.length
	for (var x = 0; x < lengthWord; x++) {
		underScore.push("_");
		// console.log(underScore);
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

	console.log("It is checking for match");
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


//you need to have the computer take the user choice and review each letter in the array to see if it is in the word
//find is where the letter from userChoices matches in the wordChosen
//errors of wordChosen not being found
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
		// document.write(lettersChosen);

		//write to html choices left
		//document.write("You have" + (13 - lettersChosen.length) + " guesses left");
		guesses--;
		document.querySelector("#guesses").innerHTML = (guesses);
		//playSoundAwww();
	}
}



function winLossCounter() {
	console.log("Do we ever get to counter?");
	console.log(guesses);
	//what is counter for knowing that no more dashes in array???
	if (lettersOfWord.toString() === underScore.toString()) {
	//this is better underScore.indexOf("_") == -1)
		console.log("are we getting to won?");
		alert("You've won!");
		wins++;
		document.querySelector("#wins").innerHTML = wins;
		gameOn();
	}

	else if (guesses === 0) {
		console.log("are we getting to loss?");
		alert("You've lost, sad face.");
		loses++;
		document.querySelector("#loses").innerHTML = loses;
		gameOn();
	}
}	


//call function to work game
gameOn();

//you need to have the user input their letter choice - it needs to be done via html instructions
//This function is run whenever the user presses a key.
document.onkeyup = function(event) {
	
	// //determins which key was pressed
	var userChoice = String.fromCharCode(event.keyCode).toLowerCase();
	
	// //logs the userChoices to console
	console.log(userChoice);

	reviewForMatch(userChoice);

	winLossCounter();

};


//do with in word match instead
