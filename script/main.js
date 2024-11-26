const audio = document.getElementById("audio");
const audioLoop = document.getElementById("audio-loop");

const button = document.getElementById("button");
const link = document.getElementById("link-to-codepen");

let guitarCalled = 0;
let trumpetCalled = 0;
let tobyClick = 1;

const guitarScene = document.getElementById("guitar-scene");
const trumpetScene = document.getElementById("trumpet-scene");
const drunkScene = document.getElementById("drunk-scene");
const drunkButPlayingScene = document.getElementById("drunk-but-playing-scene");
const concernedScene = document.getElementById("concerned-scene");
const trumpetAggressiveScene = document.getElementById("trumpet-aggressive-scene");
const papaAmericanoScene = document.getElementById("papa-americano-scene");
const background = document.getElementById("background");
const tobyText = document.getElementById("toby-text");

guitarScene.addEventListener("animationend", playTrumpets);
trumpetScene.addEventListener("animationend", playGuitar);
concernedScene.addEventListener("animationend", playGuitar);
drunkButPlayingScene.addEventListener("animationend", playTrumpets);
trumpetAggressiveScene.addEventListener("animationend", playTrumpets);

// Let's get the party started
function party() {
    button.disabled = true;
    button.classList.add("slide-up");
    link.classList.add("slide-up");

    audio.play();
    guitarCalled++;
    
    guitarScene.classList.remove("hidden");
}

// If first half of song ends, play the chorus loop
audio.addEventListener("ended", function() {
    audioLoop.play();

    drunkButPlayingScene.classList.add("hidden");
    trumpetAggressiveScene.classList.add("hidden");
    papaAmericanoScene.classList.remove("hidden");
    tobyText.classList.add("opacity-animated-100");
    background.classList.add("opacity-animated-100");

    audioLoop.loop = true;
});

function playGuitar() {
    guitarCalled++;

    if (!trumpetScene.classList.contains("hidden")) {
        trumpetScene.classList.add("hidden");
    }
    if (!concernedScene.classList.contains("hidden")) {
        concernedScene.classList.add("hidden");
    }

    if (guitarCalled > 4) {
        drunkButPlayingScene.classList.add("hidden");
    } 
    else if (guitarCalled > 3) { // play third guitar scene
        guitarScene.classList.remove("guitarist");
        guitarScene.classList.add("guitarist-quicker");
        guitarScene.classList.remove("hidden");
    } 
    else if (guitarCalled > 1) { // play second guitar scene
        guitarScene.classList.add("guitarist");
        guitarScene.classList.remove("initial-guitarist");
        guitarScene.classList.remove("hidden");
    } 
    else {
        guitarScene.classList.remove("hidden"); // play first guitar scene
    }
}

function playTrumpets() {
    trumpetCalled++;

    // initial trumpet call
    if (trumpetCalled > 1 && !guitarScene.classList.contains("hidden")) {
        guitarScene.classList.add("hidden");
    }

    if (trumpetCalled == 7 ) { // play one time trumpet animation
        trumpetAggressiveScene.classList.add("hidden");
        trumpetAggressiveScene.classList.remove("trumpetist-aggressive");
        trumpetAggressiveScene.classList.add("one-time-trumpet");
        trumpetAggressiveScene.classList.remove("hidden");
        drunkButPlayingScene.classList.add("hidden");
        drunkButPlayingScene.classList.remove("drunk-but-playing");
        drunkButPlayingScene.classList.add("one-time-trumpet");
        drunkButPlayingScene.classList.remove("hidden");
    } 
    else if (trumpetCalled > 5) { // play fast Toby trumpet scene
        trumpetAggressiveScene.classList.remove("hidden");
    } 
    else if (trumpetCalled > 4) { // play drunk Toby trumpet scene
        drunkScene.classList.add("hidden");
        drunkButPlayingScene.classList.remove("hidden");
    } 
    else if (trumpetCalled > 3) { // play drunk Toby scene
        drunkScene.classList.remove("hidden");
        concernedScene.classList.remove("hidden");
    } 
    else if (trumpetCalled > 2) { // play second trumpet scene
        trumpetScene.classList.add("trumpetist-aggressive");
        trumpetScene.classList.remove("trumpetist");
        trumpetScene.classList.remove("hidden");
    } 
    else if (trumpetCalled > 1) { // play first trumpet scene
        trumpetScene.classList.remove("hidden");
    }
}

// Function to handle Toby's headshot
function changeTobyHeadshot() {
    tobyClick++;

    if (tobyClick > 5) {
        tobyClick = 1;
    } 
    
    papaAmericanoScene.src = "./media/toby-headshot-" + tobyClick + ".png";
}