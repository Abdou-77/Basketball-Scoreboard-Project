let homeScore=0;
let awayScore=0;
let homeSc=document.getElementById("home-score");
let awyaSc=document.getElementById("away-score");

// Initialize scores display
homeSc.textContent = homeScore;
awyaSc.textContent = awayScore;

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