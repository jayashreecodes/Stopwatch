let seconds = 0;
let minutes = 0;
let interval;
let isRunning = false;

const timeDisplay = document.getElementById("timeDisplay");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const resetButton = document.getElementById("resetButton");

// Start the stopwatch
startButton.addEventListener("click", () => {
    if (!isRunning) {
        interval = setInterval(updateTime,500);
        isRunning = true;
        startButton.disabled = true;
        stopButton.disabled = false;
        resetButton.disabled = false;
    }
});

// Stop the stopwatch
stopButton.addEventListener("click", () => {
    clearInterval(interval);
    isRunning = false;
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = false;
});

// Reset the stopwatch
resetButton.addEventListener("click", () => {
    clearInterval(interval);
    isRunning = false;
    seconds = 0;
    minutes = 0;
    timeDisplay.textContent = "00:00";
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = true;
});

// Function to update time display
function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }

    timeDisplay.textContent = `${formatTime(minutes)}:${formatTime(seconds)}`;
}

// Function to format time in MM:SS
function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

