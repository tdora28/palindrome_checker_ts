const userInputEl = document.querySelector('#userInput') as HTMLInputElement;
const resultBox = document.querySelector('.result') as HTMLDivElement;

const checkPalindrome = (input: string): string => {
  let text = cleanInput(input);
  if (text.length === 0) return '';
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

const cleanInput = (susInput: string): string => {
  // Regex: Match any character that is NOT in the given set (A-Z and 0-9, case insensitive), eg. match any non-alphanumeric character
  const cleaned: string = susInput.replace(/[^A-Z0-9]+/gi, '').toLowerCase();
  return cleaned;
};

userInputEl.addEventListener('input', (e: Event) => {
  const target = e.target as HTMLInputElement;
  resultBox.textContent = checkPalindrome(target.value);
});
