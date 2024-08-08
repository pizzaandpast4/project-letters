const word = document.querySelector('.inputText');
const btn = document.querySelector('.btn');
const result = document.querySelector('.results');

btn.addEventListener('click', countVowel);

function countVowel() {
    let wordVal = word.value.toLowerCase();
    let vowelCount = 0;

    for (let i = 0; i < wordVal.length; i++) {
        const letter = wordVal[i];

        if (letter.match(/([a,e,o,u,i])/)) {
            vowelCount++;
        }
    }
    result.innerHTML = `${word.value.toUpperCase()} has ${vowelCount} vowels`;
}