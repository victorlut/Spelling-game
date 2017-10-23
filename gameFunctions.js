//This is the Javascript code file for Spelling Game

//variable to store which age group the user has selected
var ageGroup;

//function that changes the audio files 
function ageSelected(age) {
	
	if (age == '6-9') {
		//changes the 'select a difficulty' text to confirm the user's difficulty selection
		document.getElementById("difficulty").innerHTML = "You have selected: <b>Ages 6-9</b>"
		
		//the remaining code changes the audio sources to the chosen difficulty
		document.getElementById("firstAudio").setAttribute("src","sounds/stop.mp3");
		document.getElementById("audioContainerOne").load();
		
		document.getElementById("secondAudio").setAttribute("src","sounds/breakfast.mp3");
		document.getElementById("audioContainerTwo").load();
		
		document.getElementById("thirdAudio").setAttribute("src","sounds/together.mp3");
		document.getElementById("audioContainerThree").load();
		
		document.getElementById("fourthAudio").setAttribute("src","sounds/saturday.mp3");
		document.getElementById("audioContainerFour").load();
		
		document.getElementById("fifthAudio").setAttribute("src","sounds/goat.mp3");
		document.getElementById("audioContainerFive").load();
		
		ageGroup = "6-9";
	}
	else if (age == '10-13') {
		//changes the 'select a difficulty' text to confirm the user's difficulty selection
		document.getElementById("difficulty").innerHTML = "You have selected: <b>Ages 10-13</b>"
		
		//the remaining code changes the audio sources to the chosen difficulty
		document.getElementById("firstAudio").setAttribute("src","sounds/government.mp3");
		document.getElementById("audioContainerOne").load();
		
		document.getElementById("secondAudio").setAttribute("src","sounds/weird.mp3");
		document.getElementById("audioContainerTwo").load();
		
		document.getElementById("thirdAudio").setAttribute("src","sounds/mortgage.mp3");
		document.getElementById("audioContainerThree").load();
		
		document.getElementById("fourthAudio").setAttribute("src","sounds/recycle.mp3");
		document.getElementById("audioContainerFour").load();
		
		document.getElementById("fifthAudio").setAttribute("src","sounds/questionnaire.mp3");
		document.getElementById("audioContainerFive").load();
		
		ageGroup = "10-13";
	}
	else if (age == '14-17') {
		//changes the 'select a difficulty' text to confirm the user's difficulty selection
		document.getElementById("difficulty").innerHTML = "You have selected: <b>Ages 14-17</b>"
		
		//the remaining code changes the audio sources to the chosen difficulty
		document.getElementById("firstAudio").setAttribute("src","sounds/elimination.mp3");
		document.getElementById("audioContainerOne").load();
		
		document.getElementById("secondAudio").setAttribute("src","sounds/technique.mp3");
		document.getElementById("audioContainerTwo").load();
		
		document.getElementById("thirdAudio").setAttribute("src","sounds/retaliate.mp3");
		document.getElementById("audioContainerThree").load();
		
		document.getElementById("fourthAudio").setAttribute("src","sounds/ambiguous.mp3");
		document.getElementById("audioContainerFour").load();
		
		document.getElementById("fifthAudio").setAttribute("src","sounds/camouflage.mp3");
		document.getElementById("audioContainerFive").load();
		
		ageGroup = "14-17";
	}
	
	//stores ageGroup in localStorage
	localStorage.setItem("ageGroup", ageGroup);
	
	//removes the age select buttons after the player has chosen a difficulty
	document.getElementById("age69").style.display = "none";
	document.getElementById("age1013").style.display = "none";
	document.getElementById("age1417").style.display = "none";
	
	//displays the restart button to refresh the page
	document.getElementById("btnReset").style.display = "block";
}

//counts number of fields left blank
var count = 0;

//function to check that all questions have been answered
//adapted from (Agarwal, 2014). Full reference can be found in the Technical Report
function validate(event) {
	//get all guesses
	var textBox = document.getElementsByClassName("textBox");
	
	//count the empty textboxes
	var i = textBox.length;
	
	for (i; i > count; i--) {
		if (textBox[i-1].value == "") {
			count += 1;
		} else {
			count = 0;
		}
	}
	
	//output message if not all guesses are complete
	if (count != 0) {
		window.alert("You must answer all the questions!");
		event.preventDefault();
	} else {
		window.alert("You are about to submit your answers.")
		return true;
	}	
}

//function called when clicking the submit button on the form
function submitAnswers() {
	
	//get the value inside of each textbox
	var answerOne = document.getElementById("firstGuess").value;
	var answerTwo = document.getElementById("secondGuess").value;
	var answerThree = document.getElementById("thirdGuess").value;
	var answerFour = document.getElementById("fourthGuess").value;
	var answerFive = document.getElementById("fifthGuess").value;
	
	//convert user inputted data to lower case so it matches the correct answer variables' case
	var lowAnswerOne = toLowerCase(answerOne);
	var lowAnswerTwo = toLowerCase(answerTwo);
	var lowAnswerThree = toLowerCase(answerThree);
	var lowAanswerFour = toLowerCase(answerFour);
	var lowAanswerFive = toLowerCase(answerFive);
	
	//put each value into localStorage
	localStorage.setItem("answerOne", lowAnswerOne);
	localStorage.setItem("answerTwo", lowAnswerTwo);
	localStorage.setItem("answerThree", lowAnswerThree);
	localStorage.setItem("answerFour", lowAanswerFour);
	localStorage.setItem("answerFive", lowAanswerFive);
	
	return true;
}

//function containing an if statement thatc ontrols which textbox to enter
//text into depending on whether the textbox is active or not
function typeLetter(letter) {
	
	if (document.getElementById("second").style.display == "block") {
		document.getElementById("secondGuess").value += letter;
	} 
	else if (document.getElementById("third").style.display == "block") {
		document.getElementById("thirdGuess").value += letter;
	} 
	else if (document.getElementById("fourth").style.display == "block") {
		document.getElementById("fourthGuess").value += letter;
	} 
	else if (document.getElementById("fifth").style.display == "block") {
		document.getElementById("fifthGuess").value += letter;
	} 
	else {
		document.getElementById("firstGuess").value += letter;
	}
}

//functions to control when each question is displayed after clicking a next or previous button
function nextQuestionOne() {	
	document.getElementById("first").style.display = "none";
	document.getElementById("second").style.display = "block";
	document.getElementById("q2").innerHTML = "&#9899";
}

function previousQuestionOne() {
	document.getElementById("first").style.display = "block";
	document.getElementById("second").style.display = "none";
	document.getElementById("q2").innerHTML = "&#9898";
}

function nextQuestionTwo() {
	document.getElementById("second").style.display = "none";
	document.getElementById("third").style.display = "block";
	document.getElementById("q3").innerHTML = "&#9899";
}

function previousQuestionTwo() {
	document.getElementById("third").style.display = "none";
	document.getElementById("second").style.display = "block";
	document.getElementById("q3").innerHTML = "&#9898";
}

function nextQuestionThree() {
	document.getElementById("third").style.display = "none";
	document.getElementById("fourth").style.display = "block";
	document.getElementById("q4").innerHTML = "&#9899";
}

function previousQuestionThree() {
	document.getElementById("fourth").style.display = "none";
	document.getElementById("third").style.display = "block";
	document.getElementById("q4").innerHTML = "&#9898";
}

function nextQuestionFour() {
	document.getElementById("fourth").style.display = "none";
	document.getElementById("fifth").style.display = "block";
	document.getElementById("q5").innerHTML = "&#9899";
}

function previousQuestionFour() {
	document.getElementById("fifth").style.display = "none";
	document.getElementById("fourth").style.display = "block";
	document.getElementById("q5").innerHTML = "&#9898";
}

//function to refresh the page when the 'Restart Game' button is clicked
function refreshPage() {
	var confirmRefresh = confirm("Do you really want to restart the game?");
	
	if (confirmRefresh) {
		location.reload(true);
	}
}