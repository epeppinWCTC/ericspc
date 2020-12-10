$(document).ready(function () {
    $("form div").addClass("form-check");
    $("form div input").addClass("form-check-input");
    $("form div label").addClass("form-check-label");

    var allQuestions = [$("#q0"), $("#q1"), $("#q2"), $("#q3"), $("#q4"), $("#q5"), $("#q6"), $("#q7"), $("#q8"), $("#q9")]
    var currentQuestions = [];
    var questionsDisplay = [];
    var numberCorrect = 0;
    var questionsAnswered = 0;

    $(document.body).on("click", "#start-quiz", startQuiz);
    $(":radio").change(answerQuestion);

    function startQuiz() {
        randomQuestions();

        for (var i = 0; i < currentQuestions.length; i++) {
            questionsDisplay.push(allQuestions[currentQuestions[i]])
        }

        $("#start-quiz").hide();

        questionsDisplay[0].slideToggle();
    }

    function answerQuestion() {
        numberCorrect += $(this).data("correct");
        questionsAnswered++;
        if (questionsAnswered === questionsDisplay.length) {
            endQuiz();
        } else {
            switchQuestions();
        }
    }

    function switchQuestions() {
        var currentSlide = questionsDisplay[questionsAnswered - 1];
        currentSlide.slideToggle(showNextQuestion);
    }

    function showNextQuestion() {
        var slideTo = questionsDisplay[questionsAnswered];
        slideTo.slideToggle();
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

    function endQuiz() {
        var percentage = (numberCorrect / currentQuestions.length) * 100;
        $("#message-area h3").append(`You answered ${percentage.toFixed(0)}% correct`)

        $("#message-area").show();

        $("input:checked").removeAttr("checked");
    }
});