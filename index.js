"use strict";
const userInputEl = document.querySelector('#userInput');
const resultBox = document.querySelector('.result');
const checkPalindrome = (input) => {
    let text = cleanInput(input);
    if (text.length === 0)
        return '';
    let falseCounter = 0;
    for (let i = 0; i < Math.ceil(text.length / 2); i++) {
        let j = text.length - 1 - i;
        if (text[i] !== text[j]) {
            falseCounter++;
            break;
        }
    }
    return falseCounter > 0 ? 'not palindrome' : 'palindrome';
};
const cleanInput = (susInput) => {
    // Regex: Match any character that is NOT in the given set (A-Z and 0-9, case insensitive), eg. match any non-alphanumeric character
    const cleaned = susInput.replace(/[^A-Z0-9]+/gi, '').toLowerCase();
    return cleaned;
};
userInputEl.addEventListener('input', (e) => {
    const target = e.target;
    resultBox.textContent = checkPalindrome(target.value);
});
