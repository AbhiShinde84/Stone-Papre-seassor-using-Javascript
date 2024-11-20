
const choices = ["Stone", "Paper", "Scissors"];

const resultMatrix = [
  ["draw", "You lost", "You win"],  // Stone vs. (Stone, Paper, Scissors)
  ["You win", "draw", "You lost"],  // Paper vs. (Stone, Paper, Scissors)
  ["You lost", "You win", "draw"]   // Scissors vs. (Stone, Paper, Scissors)
];


let history = [];

function playGame(userChoice) {
  const computerChoice = Math.floor(Math.random() * 3);
  const result = resultMatrix[userChoice][computerChoice];

  document.getElementById("computer-choice").innerHTML = `Computer's Choice: <span>${choices[computerChoice]}</span>`;
  document.getElementById("user-choice").innerHTML = `Your Choice: <span>${choices[userChoice]}</span>`;
  document.getElementById("result").innerHTML = `Result: <span>${result}</span>`;

  const roundResult = `You: ${choices[userChoice]}, Computer: ${choices[computerChoice]} → ${result}`;
  history.push(roundResult);

  updateHistory();
}

function updateHistory() {
  const historyList = document.getElementById("history-list");
  historyList.innerHTML = "";

  history.forEach((entry, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `Round ${index + 1}: ${entry}`;
    historyList.appendChild(listItem);
  });
}

function resetGame() {
  document.getElementById("computer-choice").innerHTML = `Computer's Choice: <span>-</span>`;
  document.getElementById("user-choice").innerHTML = `Your Choice: <span>-</span>`;
  document.getElementById("result").innerHTML = `Result: <span>-</span>`;
  
  history = [];
  updateHistory();
}
