var buttonColours = ["red", "blue", "green", "yellow"]
var gamePattern = [];
var userClickedPattern = [];
var level = 0;  
var started = false;
function nextSequence() {
    var randomNumber = Math.random() * 4;
    randomNumber = Math.floor(randomNumber);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    buttonColours.push(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    
    playSound(randomChosenColour);
    level++;
    $("h1").text("level " + level);



}
$(".btn").click(function () {
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    // console.log(userClickedPattern);
    playSound(userChosenColour);
    checkAnswer(userClickedPattern[userClickedPattern.length - 1]);
    animatePress(userChosenColour);
});
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
    
}
function animatePress(currentColour) {
    $("." + currentColour).addClass("pressed");
    setTimeout(function () {
    $("." + currentColour).removeClass("pressed");
     }, 100);
}

$(document).keypress(function () {
    if (!started) {
        nextSequence();
        $("h1").text("level " + level);
        started = true;
    }
});

function checkAnswer(currentLevel) {
    if (currentLevel === gamePattern[gamePattern.length-1] ) {
    } else {
    }
}


