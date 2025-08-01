let homeScore=0;
let awayScore=0;
let homeSc=document.getElementById("home-score");
let awyaSc=document.getElementById("away-score");

// Timer variables
let gameTime = 720; // 12 minutes in seconds
let timerInterval;
let isTimerRunning = false;
let currentPeriod = 1;

// Initialize displays
homeSc.textContent = homeScore;
awyaSc.textContent = awayScore;
updateTimerDisplay();
updatePeriodDisplay();

function animateScore(element) {
    element.style.transform = 'scale(1.3)';
    element.style.color = '#FF4444';
    element.style.textShadow = '0 0 20px rgba(255, 68, 68, 1)';
    
    setTimeout(() => {
        element.style.transform = 'scale(1)';
        element.style.color = '#FF4444';
        element.style.textShadow = '0 0 10px rgba(255, 68, 68, 0.5)';
    }, 200);
}

function plus1_Home() {
    homeScore+=1;
    homeSc.textContent=homeScore;
    animateScore(homeSc);
}

function plus2_Home() {
    homeScore+=2;
    homeSc.textContent=homeScore;
    animateScore(homeSc);
}

function plus3_Home() {
    homeScore+=3;
    homeSc.textContent=homeScore;
    animateScore(homeSc);
}

function plus1_Away() {
    awayScore+=1;
    awyaSc.textContent=awayScore;
    animateScore(awyaSc);
}

function plus2_Away() {
    awayScore+=2;
    awyaSc.textContent=awayScore;
    animateScore(awyaSc);
}

function plus3_Away() {
    awayScore+=3;
    awyaSc.textContent=awayScore;
    animateScore(awyaSc);
}

function resetScores() {
    homeScore = 0;
    awayScore = 0;
    homeSc.textContent = homeScore;
    awyaSc.textContent = awayScore;
    
    // Also reset timer and period
    resetGame();
    
    // Add reset animation
    animateScore(homeSc);
    setTimeout(() => {
        animateScore(awyaSc);
    }, 100);
}

function minus1_Home() {
    if (homeScore > 0) {
        homeScore -= 1;
        homeSc.textContent = homeScore;
        animateScore(homeSc);
    }
}

function minus2_Home() {
    if (homeScore > 1) {
        homeScore -= 2;
        homeSc.textContent = homeScore;
        animateScore(homeSc);
    }
}

function minus3_Home() {
    if (homeScore > 2) {
        homeScore -= 3;
        homeSc.textContent = homeScore;
        animateScore(homeSc);
    }
}

function minus1_Away() {
    if (awayScore > 0) {
        awayScore -= 1;
        awyaSc.textContent = awayScore;
        animateScore(awyaSc);
    }
}

function minus2_Away() {
    if (awayScore > 1) {
        awayScore -= 2;
        awyaSc.textContent = awayScore;
        animateScore(awyaSc);
    }
}

function minus3_Away() {
    if (awayScore > 2) {
        awayScore -= 3;
        awyaSc.textContent = awayScore;
        animateScore(awyaSc);
    }
}

// Timer Functions
function updateTimerDisplay() {
    const minutes = Math.floor(gameTime / 60);
    const seconds = gameTime % 60;
    const timerElement = document.getElementById('game-timer');
    timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    // Change color when time is low
    if (gameTime <= 60) {
        timerElement.style.color = '#FF4444';
        timerElement.style.textShadow = '0 0 15px rgba(255, 68, 68, 0.8)';
    } else {
        timerElement.style.color = '#FFD700';
        timerElement.style.textShadow = '0 0 10px rgba(255, 215, 0, 0.5)';
    }
}

function updatePeriodDisplay() {
    document.getElementById('period-number').textContent = currentPeriod;
}

function startTimer() {
    if (!isTimerRunning && gameTime > 0) {
        isTimerRunning = true;
        timerInterval = setInterval(() => {
            gameTime--;
            updateTimerDisplay();
            
            if (gameTime <= 0) {
                pauseTimer();
                // Auto advance to next period
                if (currentPeriod < 4) {
                    nextPeriod();
                } else {
                    alert('Game Over!');
                }
            }
        }, 1000);
        
        // Update button states
        document.getElementById('start-btn').style.opacity = '0.5';
        document.getElementById('pause-btn').style.opacity = '1';
    }
}

function pauseTimer() {
    isTimerRunning = false;
    clearInterval(timerInterval);
    
    // Update button states
    document.getElementById('start-btn').style.opacity = '1';
    document.getElementById('pause-btn').style.opacity = '0.5';
}

function resetTimer() {
    pauseTimer();
    gameTime = 720; // Reset to 12 minutes
    updateTimerDisplay();
}

function nextPeriod() {
    if (currentPeriod < 4) {
        currentPeriod++;
        gameTime = 720; // Reset timer for new period
        updateTimerDisplay();
        updatePeriodDisplay();
        
        // Animate period change
        const periodElement = document.getElementById('period-number');
        periodElement.style.transform = 'scale(1.5)';
        periodElement.style.color = '#FF4444';
        periodElement.style.textShadow = '0 0 20px rgba(255, 68, 68, 1)';
        
        setTimeout(() => {
            periodElement.style.transform = 'scale(1)';
            periodElement.style.color = '#FFD700';
            periodElement.style.textShadow = '0 0 10px rgba(255, 215, 0, 0.5)';
        }, 500);
    }
}

function resetGame() {
    pauseTimer();
    currentPeriod = 1;
    gameTime = 720;
    updateTimerDisplay();
    updatePeriodDisplay();
}