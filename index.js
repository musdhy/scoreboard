// Get the score elements
const score1 = document.querySelector('.score1');
const score2 = document.querySelector('.score2');

// Get the buttons
const btn1 = document.querySelectorAll('.btn.one');
const btn2 = document.querySelectorAll('.btn.two');
const btn3 = document.querySelectorAll('.btn.three');

// Add event listeners to buttons
btn1.forEach(button => button.addEventListener('click', addOne));
btn2.forEach(button => button.addEventListener('click', addTwo));
btn3.forEach(button => button.addEventListener('click', addThree));

// Define the addOne function
function addOne() {
  // Get the current score and add 1
  let currentScore = parseInt(this.parentElement.previousElementSibling.textContent);
  currentScore += 1;
  
  // Update the score element
  this.parentElement.previousElementSibling.textContent = currentScore;
}

// Define the addTwo function
function addTwo() {
  // Get the current score and add 2
  let currentScore = parseInt(this.parentElement.previousElementSibling.textContent);
  currentScore += 2;
  
  // Update the score element
  this.parentElement.previousElementSibling.textContent = currentScore;
}

// Define the addThree function
function addThree() {
  // Get the current score and add 3
  let currentScore = parseInt(this.parentElement.previousElementSibling.textContent);
  currentScore += 3;
  
  // Update the score element
  this.parentElement.previousElementSibling.textContent = currentScore;
}

// Get the timer element
const timer = document.querySelector('.time h2');

// Get the start button
const startBtn = document.querySelector('.time button');

// Set the initial time
let time = 600; // 10 minutes in seconds

// Define the countdown function
function countdown() {
  // Update the time element
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  timer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  
  // Decrement the time
  time--;
  
  // Check if the time is up
  if (time < 0) {
    clearInterval(interval);
    timer.textContent = "Time's up!";
  }
}

// Add event listener to start button
startBtn.addEventListener('click', () => {
  // Start the countdown
  const interval = setInterval(countdown, 1000);
});
