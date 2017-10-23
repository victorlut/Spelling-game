//This is the code for the Results page

//function verifies the player's answers, calculates score and gives option to add to leaderboard
function run() {
	
	/*	Unfortunately, I haven't been able to fully implement localStorage over the file:// protocol
		and as such would need a web server to be able to pass data from index.html to result.html when
		the form is submitted. This means that I can't do any check on the player's answers or calculate
		their score. Instead I have included a summary of what answers should have been on the results page */

		
	//define correct answer variables
	var correctAnswerOne, correctAnswerTwo, correctAnswerThree, correctAnswerFour, correctAnswerFive;

	//define variable to keep player's score
	var playerScore = 0;
	
	//get ageGroup from localStorage
	var ageGroup = localStorage.getItem("ageGroup");
	
	//get answers from localStorage and store in variables
	var answerOne = localStorage.getItem("answerOne");
	var answerTwo = localStorage.getItem("answerTwo");
	var answerThree = localStorage.getItem("answerThree");
	var answerFour = localStorage.getItem("answerFour");
	var answerFive = localStorage.getItem("answerFive");
	
	//populate the table with player's answers
	document.getElementById("aOne").innerHTML = localStorage.getItem("answerOne");
	document.getElementById("aTwo").innerHTML = localStorage.getItem("answerTwo");
	document.getElementById("aThree").innerHTML = localStorage.getItem("answerThree");
	document.getElementById("aFour").innerHTML = localStorage.getItem("answerFour");
	document.getElementById("aFive").innerHTML = localStorage.getItem("answerFive");
	
	//depending on which ageGroup was selected, the correct answers are different
	if (ageGroup == "6-9") {
		//assign answers to variables
		correctAnswerOne = "stop";
		correctAnswerTwo = "breakfast";
		correctAnswerThree = "together";
		correctAnswerFour = "saturday";
		correctAnswerFive = "goat";
	
		//insert the correct answers in to the Questions column
		document.getElementById("qOne").innerHTML = correctAnswerOne;
		document.getElementById("qTwo").innerHTML = correctAnswerTwo;
		document.getElementById("qThree").innerHTML = correctAnswerThree;
		document.getElementById("qFour").innerHTML = correctAnswerFour;
		document.getElementById("qFive").innerHTML = correctAnswerFive;
	}
	else if (ageGroup == "10-13") {
		//assign answers to variables
		correctAnswerOne = "government";
		correctAnswerTwo = "weird";
		correctAnswerThree = "mortgage";
		correctAnswerFour = "recycle";
		correctAnswerFive = "questionnaire";
		
		//insert the correct answers in to the Questions column
		document.getElementById("qOne").innerHTML = correctAnswerOne;
		document.getElementById("qTwo").innerHTML = correctAnswerTwo;
		document.getElementById("qThree").innerHTML = correctAnswerThree;
		document.getElementById("qFour").innerHTML = correctAnswerFour;
		document.getElementById("qFive").innerHTML = correctAnswerFive;
	}
	else if (ageGroup == "14-17") {
		//assign answers to variables
		correctAnswerOne = "elimination";
		correctAnswerTwo = "technique";
		correctAnswerThree = "retaliate";
		correctAnswerFour = "ambiguous";
		correctAnswerFive = "camouflage";
		
		//insert the correct answers in to the Questions column
		document.getElementById("qOne").innerHTML = correctAnswerOne;
		document.getElementById("qTwo").innerHTML = correctAnswerTwo;
		document.getElementById("qThree").innerHTML = correctAnswerThree;
		document.getElementById("qFour").innerHTML = correctAnswerFour;
		document.getElementById("qFive").innerHTML = correctAnswerFive;
	}
		
		//The following code would check the player's answers and calculate a total score,
		//then display it in the table on the page
	/*	
	if (answerOne == correctAnswerOne) {
		playerScore++;
		document.getElementById("cOne").innerHTML = "Yes";
	} else {
		document.getElementById("cOne").innerHTML = "No";
	}
	
	if (answerTwo == correctAnswerTwo) {
		playerScore++;
		document.getElementById("cTwo").innerHTML = "Yes";
	} else {
		document.getElementById("cTwo").innerHTML = "No";
	}
	
	if (answerThree == correctAnswerThree) {
		playerScore++;
		document.getElementById("cThree").innerHTML = "Yes";
	} else {
		document.getElementById("cThree").innerHTML = "No";
	}
	
	if (answerFour == correctAnswerFour) {
		playerScore++;
		document.getElementById("cFour").innerHTML = "Yes";
	} else {
		document.getElementById("cFour").innerHTML = "No";
	}
	
	if (answerFive == correctAnswerFive) {
		playerScore++;
		document.getElementById("cFive").innerHTML = "Yes";
	} else {
		document.getElementById("cFive").innerHTML = "No";
	}
	
	document.getElementById("score").innerHTML = "Your final score is: " + "<b>" + playerScore + "</b>";*/
}