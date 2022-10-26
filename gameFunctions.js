//This is the Javascript code file for Spelling Game

//variable to store which age group the user has selected
var activityNumber;
var wordList = [];
var step = 0;

//function that changes the audio files

$(document).ready(() => {
    document.getElementById("audioContainerOne").addEventListener('ended', () => {
        $('.btnReplay').attr('disabled', false);
        $('.btnReplay').removeClass('playing');
    })
})

function initState() {
    step = 0;

    localStorage.setItem("activityNumber", activityNumber);
    $('#progressBar').html(`${wordList.length} WORDS`);

    $('.activitySelect').hide();
    $("#btnReset").show();

    $('[disabled]').attr('disabled', false);
    $('.status-text').hide();

    setupQuestion();
}

function endState() {
    location.href = location.href + '?#finished';
}

function setupQuestion() {
    const wordString = wordList[step];
    const soundURL = `data/Activity${activityNumber}/Activity ${activityNumber} - ${wordString}.mp3`;
    $('#questionNo').html(`Word ${step + 1}`).removeClass('green');
    $('#guessEdit').val('');
    document.getElementById("audioRef").setAttribute("src", soundURL);
    document.getElementById("audioContainerOne").load();
    replayAudio();
    $('.btnReplay').attr('disabled', true);
    $('#btnReset').show();
    $('#btnStart').hide();
    console.log(wordString)
}

function shuffleWords(list) {
    list.sort(() => Math.random() - 0.5);
    return list;
}

function activitySelected(activity) {
    activityNumber = activity;
	$.ajax({
        type: "get",
        url: `data/Activity${activityNumber}/list.json`,
        success: function (response) {
            wordList = response.map(word => word.toLowerCase());
            wordList = shuffleWords(wordList)
            initState();
        },
        error: function (err) {
            alert(`Activity ${activityNumber} doesn't exist.`);
        }
    });
}

function replayAudio() {
    document.getElementById("audioContainerOne").play();
    $('.btnReplay').attr('disabled', true);
    $('.btnReplay').addClass('playing');
}

//counts number of fields left blank
var count = 0;

//function containing an if statement thatc ontrols which textbox to enter
//text into depending on whether the textbox is active or not
function typeLetter(letter) {
    if (letter == 'backspace')
        document.getElementById("guessEdit").value = document.getElementById("guessEdit").value.slice(0, -1);
    else
	    document.getElementById("guessEdit").value += letter;
}

//functions to control when each question is displayed after clicking a next or previous button
function nextQuestion(e = null) {
    if (e) {
        e.preventDefault();
    }
    $('.status-text').hide();

    $('#questionBoard').removeClass('wrong');
    $('#questionBoard').removeClass('perfect');
    
    if ($('#guessEdit').val() !== wordList[step]) {
        $('.status-text.wrong').show();
        $('#questionBoard').addClass('wrong');
        return;
    }

    $('#questionBoard').addClass('perfect');
    $('.status-text.green').show();

    step ++;
    if (step >= wordList.length) {
        endState();
    } else {
        $('#guessEdit').val('');
        $('.board-wrapper').animate({
            'margin-left': '-100px',
            'opacity': '0',
        }, 600, () => {
            $('.board-wrapper').css({
                'margin-left': 0,
                'margin-right': '-100px'
            })
            $('.board-wrapper').animate({
                'margin-right': '0',
                'opacity': '1'
            }, 600, () => {
                setupQuestion();                
            })
        });
    }
    
}

function viewSolution() {
    $('#questionNo').html(`${wordList[step]}`).addClass('green');
}

//function to refresh the page when the 'Restart Game' button is clicked
function refreshPage() {
	var confirmRefresh = confirm("Do you really want to restart the game?");
	
	if (confirmRefresh) {
		location.reload(true);
	}
}