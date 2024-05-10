// Function to start the quiz from page 1
function startQuiz() {
  // Reset the score when the quiz starts
  localStorage.setItem('score', '0');
  window.location.href = 'question1.html';
}

// Function to check the answer for each question
function checkAnswer(correctAnswer) {
  const form = document.querySelector('form');
  const selectedAnswer = form.querySelector('input[name="answer"]:checked');

  if (selectedAnswer && selectedAnswer.value === correctAnswer) {
    let score = localStorage.getItem('score');
    score = score ? parseInt(score) : 0;
    score++;
    localStorage.setItem('score', score);
  }

  if (window.location.href.includes('question1')) {
    window.location.href = 'question2.html';
  } else if (window.location.href.includes('question2')) {
    window.location.href = 'question3.html';
  } else if (window.location.href.includes('question3')) {
    window.location.href = 'question4.html';
  } else if (window.location.href.includes('question4')) {
    window.location.href = 'question5.html';
  } else if (window.location.href.includes('question5')) {
    window.location.href = 'question6.html';
  } else if (window.location.href.includes('question6')) {
    window.location.href = 'question7.html';
  } else if (window.location.href.includes('question7')) {
    window.location.href = 'question8.html';
  } else if (window.location.href.includes('question8')) {
    window.location.href = 'result.html';
  }
}

// Function to display the final score on result page
window.onload = function() {
  const scoreSpan = document.getElementById('score');
  const score = localStorage.getItem('score');
  if (score) {
    scoreSpan.textContent = score;
  } else {
    scoreSpan.textContent = 'N/A';
  }
};
