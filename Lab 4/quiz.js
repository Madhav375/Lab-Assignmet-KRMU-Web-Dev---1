var questions = [
    "What is the capital of India?",
    "How many days are in a leap year?",
    "Which among the following makes webpage functional and dynamic? (js/css/html)",
    "What is 5* 6?",
    "Which is used to style web pages? (css/html/js)",
    "Which is the square of 9?"
];

var answers = [
    "delhi",
    "366",
    "js",
    "30",
    "css",
    "81"
];
var score = 0;
for (var i = 0; i < questions.length; i++) {
    var userAnswer = prompt(questions[i]);
    if (userAnswer === null) {
        alert("Quiz stopped.");
        break;
    }
    userAnswer = userAnswer.toLowerCase().trim();
    if (userAnswer === answers[i]) {
        alert("Correct!");
        score++;
    } else {
        alert("Wrong! Correct answer is: " + answers[i]);
    }
}
alert("Your final score: " + score + " / " + questions.length);