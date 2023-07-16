var buttonColours = ["red", "blue", "green", "yellow"]
var gamePattern = [];
function nextSequence() {
    var randomNumber = Math.random() * 4;
    randomNumber = Math.floor(randomNumber);
    var randomChosenColour = buttonColours[randomNumber];
    buttonColours.push(randomChosenColour);
}
$