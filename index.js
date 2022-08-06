function randomOnBtn() {
    var numberOfRandom = Math.floor(Math.random() * 4);
    return numberOfRandom
}

function buttonblink(wheretoBlink){
    $(wheretoBlink).fadeIn(100).fadeOut(100).fadeIn(100);
}

function checkAnswer(guess) {
        for(var i = 0; i < answer.length; i++) {
            if (answer[i] != guess[i]) {
                $(document).css("backfground-color", "red");
                $("#level-title").text("Game Over! Press any key to restart.");
            }
            else {
                stage +=1
                workingStage();
            }
        }
        return true
}
function workingStage() {
    $("#level-title").text("Level " + stage);
    answer.push(buttons[randomOnBtn()]);
    buttonblink(".btn" + "." + answer[stage - 1]);
    var guess = []
    $(".btn").on("click", e => {
        if (startt == 0) {
            guess.push(e.currentTarget.classList[1])
            checkAnswer(guess);
        }
    });
}

var startt = 0;
var stage = 1;
const buttons = ["green", "red", "yellow", "blue"]
var answer = [];

$(document).on("keypress", function start() {
    if (startt == 0) {
        answer = [];
        workingStage();
    }
    startt = 1;
});





    
