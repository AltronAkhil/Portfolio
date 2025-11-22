//sidebars
function sidebar() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.style.display = 'flex';
}

function sidebarclose() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.style.display = 'none';
}
// Percentage Calculator
function calculatePercentage() {
let v = document.getElementById('value').value;
let p = document.getElementById('percent').value;
if(v && p) {
document.getElementById('percentResult').innerText = `${(v * p) / 100}`;
}
}


// Age Calculator
function calculateAge() {
let dob = new Date(document.getElementById('dob').value);
let diff = Date.now() - dob.getTime();
let age = new Date(diff).getUTCFullYear() - 1970;
document.getElementById('ageResult').innerText = `Age: ${age}`;
}


// Simple Calculator
function calculateResult() {
let screen = document.getElementById('calcScreen');
try { screen.value = eval(screen.value); }
catch { screen.value = 'Error'; }
}


// Guess the Number
let secretNumber = Math.floor(Math.random()*10)+1;
function guessNumber() {
let guess = document.getElementById('guessInput').value;
let msg = (guess == secretNumber) ? 'Correct!' : 'Wrong, try again!';
document.getElementById('guessResult').innerText = msg;
}


// Click Speed Game
let clicks = 0;
function clickGame() {
clicks++;
document.getElementById('clickResult').innerText = `Clicks: ${clicks}`;
}
function reset() {
clicks = 0;
document.getElementById('clickResult').innerText = `Clicks: ${clicks}`;
}

// contact form
function sendEmail() {
    const name = document.getElementById('name').value;
    alert(`Hi ${name}!
            Welcome to my portfolio.`); 
            name.value = "";        
}

function downloadImage() {
    const link = document.createElement('a');
    link.href = 'elements/CV.jpg';   
    link.download = 'CV.jpg';      
    link.click();
}