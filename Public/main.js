let startTime;
let interval;
const userInputField = document.getElementById('userInput');
const textToTypeField = document.getElementById('textToType');
let originalText;

// New snippet to select a random sentence from an array
    const sentences = [
        'Nullam pulvinar vitae mi quis volutpat.',
        'Integer imperdiet dolor vitae ultricies malesuada.',
        'Quisque bibendum eu urna sed convallis.',
        'Maecenas malesuada velit ut nulla consequat, in rutrum nulla bibendum.',
        'Nulla quis magna et dui eleifend sodales.',
        'Proin a pretium augue, non scelerisque quam.',
        'Aliquam tincidunt massa est, dapibus semper ante viverra non.',
        'Donec orci ligula, blandit eget pretium in, luctus ac sem.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Vivamus quis tortor feugiat, commodo diam sit amet, blandit augue.'
    ];

    function getRandomSentence() {
        const randomIndex = Math.floor(Math.random() * sentences.length);
        return sentences[randomIndex];
    }
    
    function initializeNewTypingTest() {
        originalText = getRandomSentence();
        textToTypeField.innerHTML = originalText;
        userInputField.value = '';
        clearInterval(interval);
        startTime = undefined;
        // Any other reset operations
    }
    
    document.addEventListener('DOMContentLoaded', (event) => {
        initializeNewTypingTest();
    originalText = getRandomSentence();
    textToTypeField.textContent = originalText;
});

document.addEventListener('keydown', (event) => {
    let keyId;
    if (event.code === 'Space') {
        keyId = 'keySpace';
    } else {
        keyId = `key${event.key.toUpperCase()}`;
    }

    const keyElement = document.getElementById(keyId);
    if (keyElement) {
        keyElement.classList.add('active');
    }
});

document.addEventListener('keyup', (event) => {
    let keyId;
    if (event.code === 'Space') {
        keyId = 'keySpace';
    } else {
        keyId = `key${event.key.toUpperCase()}`;
    }

    const keyElement = document.getElementById(keyId);
    if (keyElement) {
        keyElement.classList.remove('active');
    }
});


userInputField.addEventListener('input', function() {
    // Restart the timer if it's a new session
    if (this.value.length === 1 && !startTime) {
        startTime = new Date();
        interval = setInterval(updateTime, 1000);
    }
    
    if (this.value === originalText) {
        initializeNewTypingTest();
        // Restart the timer if necessary
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