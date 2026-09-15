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
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    const button = document.getElementById("darkModeBtn");

    if (document.body.classList.contains("dark-mode")) {
        button.innerText = "☀️ Light Mode";
    } else {
        button.innerText = "🌙 Dark Mode";
    }
}