// objective: Guess the word represented by the emoji!

// Current correct answer (for client-side validation)
let currentAnswer = "";

// Load a new question 
async function loadQuestion() {

    const res = await fetch('/api/question');
    const data = await res.json();

    // Display emoji 
    document.getElementById('emoji').textContent = data.emoji;

    currentAnswer = data.correctAnswer;

    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = "";

    // Create buttons for options 
    data.options.forEach(option => {

        const btn = document.createElement('button');
        btn.textContent = option;

        // On click ==> send answer 
        btn.onclick = () => submitAnswer(option);

        optionsDiv.appendChild(btn);
    });
}

// Submit answer to server and get result
async function submitAnswer(choice) {

    const res = await fetch('/api/answer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            guess: choice,
            correctAnswer: currentAnswer
        })
    });

    const data = await res.json();
    // Show result to user
    document.getElementById('result').textContent =
        data.correct ? "✅ Correct!" : "❌ Wrong!";
    document.getElementById('score').textContent = data.score;
}

// Load first question on page load
loadQuestion();




