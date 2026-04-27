//  Daily Challenge: Emoji Guessing Game

// Objective: Build a simple emoji guessing game where players identify the name of an emoji from a set of options. The game will track scores and display a leaderboard

const express = require("express");
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Serve static frontend files
app.use(express.static("public"));

// Emoji data

const emojis = [
  { emoji: "😀", name: "Smile" },
  { emoji: "🐶", name: "Dog" },
  { emoji: "🌮", name: "Taco" },
  { emoji: "🚗", name: "Car" },
  { emoji: "🍎", name: "Apple" },
];

// Game state (simple version)
let score = 0;

// Step 3: Generate questions
app.get("/api/question", (req, res) => {
  // Pick random emoji
  const correct = emojis[Math.floor(Math.random() * emojis.length)];

  // Get random wrong options
  const options = [correct.name];

  while (options.length < 4) {
    const random = emojis[Math.floor(Math.random() * emojis.length)];
    if (!options.includes(random.name)) {
      options.push(random.name);
    }
  }

  // Shuffle options
  options.sort(() => Math.random() - 0.5);

  res.json({
    emoji: correct.emoji,
    correctAnswer: correct.name, // ⚠️ (for demo, normally hide this)
    options,
  });
});

// Check answer
app.post("/api/answer", (req, res) => {
  const { guess, correctAnswer } = req.body;

  let isCorrect = guess === correctAnswer;

  if (isCorrect) {
    score++;
  }

  res.json({
    correct: isCorrect,
    score,
  });
});

// Leaderboard (simple)

let leaderboard = [];

app.post("/api/leaderboard", (req, res) => {
  const { name } = req.body;

  leaderboard.push({ name, score });

  // Sort descending
  leaderboard.sort((a, b) => b.score - a.score);

  res.json(leaderboard.slice(0, 5)); // top 5
});

app.get("/api/leaderboard", (req, res) => {
  res.json(leaderboard);
});

// Start server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});



