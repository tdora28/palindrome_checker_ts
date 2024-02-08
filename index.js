var userInputEl = document.querySelector('#userInput');
var resultBox = document.querySelector('.result');
var checkPalindrome = function (input) {
    var text = cleanInput(input);
    if (text.length === 0)
        return '';
    var falseCounter = 0;
    for (var i = 0; i < Math.ceil(text.length / 2); i++) {
        var j = text.length - 1 - i;
        if (text[i] !== text[j]) {
            falseCounter++;
            break;
        }
    }
    return falseCounter > 0 ? 'not palindrome' : 'palindrome';
};
var cleanInput = function (susInput) {
    // Regex: Match any character that is NOT in the given set (A-Z and 0-9, case insensitive), eg. match any non-alphanumeric character
    var cleaned = susInput.replace(/[^A-Z0-9]+/gi, '').toLowerCase();
    return cleaned;
};
userInputEl.addEventListener('input', function (e) {
    var target = e.target;
    resultBox.textContent = checkPalindrome(target.value);
});
