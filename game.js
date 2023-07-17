var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;  

$(document).keypress(function () {
    if (!started) {
        nextSequence();
        $("h1").text("level " + level);
        started = true;
    }
});

$(".btn").click(function () {

    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    // console.log(userClickedPattern);
    playSound(userChosenColour);
    checkAnswer(userChosenColour);
    animatePress(userChosenColour);
});


function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel] ) {
        console.log("success");
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }

    } else {
        console.log("fail");
        playSound("wrong");

        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");

        }, 200);
        $("#level-title").text("Game Over, Press Any Key to Restart");

    }
}




function nextSequence() {
    userClickedPattern = [];
    var randomNumber = Math.random() * 4;
    randomNumber = Math.floor(randomNumber);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    
    playSound(randomChosenColour);
    level++;
    $("h1").text("level " + level);

    function playSound(name) {
        var audio = new Audio("sounds/" + name + ".mp3");
        audio.play();
        
    }

}
function animatePress(currentColour) {
    $("." + currentColour).addClass("pressed");
    setTimeout(function () {
    $("." + currentColour).removeClass("pressed");
     }, 100);
}
