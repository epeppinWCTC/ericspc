$(document).ready(function () {
    var allQuestions = [$("#q0"), $("#q1"), $("#q2"), $("#q3"), $("#q4"), $("#q5"), $("#q6"), $("#q7"), $("#q8"), $("#q9")]
    var currentQuestions = [];

    $(document.body).on("click", "#start-quiz", startQuiz);

    function startQuiz() {
        randomQuestions();
        var questionsDisplay = [
            allQuestions[currentQuestions[0]],
            allQuestions[currentQuestions[0]],
            allQuestions[currentQuestions[0]],
            allQuestions[currentQuestions[0]],
            allQuestions[currentQuestions[0]]
        ];
    }

    function randomQuestions() {
        while (currentQuestions.length < 5) {
            var randomNumber = Math.floor(Math.random() * allQuestions.length);
            if (currentQuestions.includes(randomNumber)) {
                continue;
            } else {
                currentQuestions.push(randomNumber);
            }
        }
    }
});