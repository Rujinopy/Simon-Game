var buttonColors = ["red","blue", "green", "yellow"]
var started = false
var answer = []
var clickPattern = []
var currentLv = 0

$(document).keypress(function () {
    
    if (started === false){
        currentLv = 0
        started = true;
        NextStage()
    }

    else{

    }
})


$(".btn").click(function() {  
    var userChosenColor = $(this).attr("id")  
    clickPattern.push(userChosenColor)
    playSound(userChosenColor)
    btnAnimate(userChosenColor)  
    checkAnswer(clickPattern.length - 1)    
console.log(userChosenColor)})

function randomNum() {
    return Math.floor(Math.random() * 4);
}

function NextStage() {
    currentLv += 1
    clickPattern = []
    $("#level-title").text("Level" + currentLv);
    var tempRandom = buttonColors[randomNum()]
    answer.push(tempRandom)
    $("#" + tempRandom).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(tempRandom)
}

function checkAnswer(currentLv) {
    if(clickPattern[currentLv] === answer[currentLv]) {
        console.log("true")
        if(clickPattern.length === answer.length ) {
            setTimeout(function () {
                NextStage();
            }, 1000)
        }
    }

    else if(clickPattern[currentLv] != answer[currentLv]) {
        console.log("wrong")
        playSound("wrong")
        $("#level-title").text("Game Over, Press Any Key to Restart");
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 100);
        // $("body").
        answer = []
        currentLv = 0
        console.log(currentLv)
        started = false
        
    }
    
}

function nextSequence() { 


}
function btnAnimate(buttonColor) {
    $("#" + buttonColor).addClass("pressed");
    setTimeout(function () {
        $("#" + buttonColor).removeClass("pressed");
    }, 100);
}

function playSound(buttonColor) {
    var audio = new Audio("sounds/" + buttonColor + ".mp3" )
    audio.play()
}
