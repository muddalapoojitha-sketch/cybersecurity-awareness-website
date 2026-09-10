let score = 0;

function checkAnswer(answer) {

    if (answer === "correct") {
        score++;
        document.getElementById("quiz-result").innerText =
            "🎉 Correct! Never click suspicious links.";
    } else {
        document.getElementById("quiz-result").innerText =
            "❌ Wrong answer. Be careful with suspicious links.";
    }

    document.getElementById("score").innerText =
        "Score: " + score;
}