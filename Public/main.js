let startTime;
let interval;
const userInputField = document.getElementById('userInput');
const textToTypeField = document.getElementById('textToType');
const originalText = textToTypeField.textContent;

userInputField.addEventListener('input', function() {
    // Restart the timer if it's a new session
    if (this.value.length === 1 && !startTime) {
        startTime = new Date();
        interval = setInterval(updateTime, 1000);
    }

    let correctChars = 0;
    let isTypingCorrect = true;

    // Clear previous styling
    textToTypeField.innerHTML = originalText;

    // Check each character
    let displayedText = '';
    for (let i = 0; i < this.value.length; i++) {
        if (isTypingCorrect) {
            if (this.value[i] === originalText[i]) {
                displayedText += `<span class="correct">${this.value[i]}</span>`;
                correctChars++;
            } else {
                displayedText += `<span class="incorrect">${this.value[i]}</span>`;
                isTypingCorrect = false; // Stop allowing input when a mistake is made
            }
        }
    }

    // Update the display
    textToTypeField.innerHTML = displayedText + originalText.slice(this.value.length);

    // Calculate accuracy
    let accuracy = (correctChars / originalText.length) * 100;
    document.getElementById('accuracy').textContent = `Accuracy: ${accuracy.toFixed(2)}%`;

    // Prevent further input if there is a typing error
    if (!isTypingCorrect) {
        userInputField.value = userInputField.value.substring(0, correctChars);
    }
});

function updateTime() {
    let currentTime = new Date();
    let timeTaken = Math.floor((currentTime - startTime) / 1000);
    document.getElementById('timeTaken').textContent = `Time: ${timeTaken} seconds`;
}

// To stop the timer when the text is completely and correctly typed
userInputField.addEventListener('blur', function() {
    clearInterval(interval);
});