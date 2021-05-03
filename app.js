
// Displayed variables
const displayNoun1 = document.getElementById('noun1');
const displayNoun2 = document.getElementById('noun2');
const displayVerb1S = document.getElementById('verb1-s');
const displayNoun3 = document.getElementById('noun3');
const displayVerb2 = document.getElementById('verb2');
const displayNoun2Part = document.getElementById('noun2-part');
const displayTextBody = document.getElementById('text-body');
// inputs
const input1 = document.getElementById('input-noun1');
const input2 = document.getElementById('input-noun2');
const input3 = document.getElementById('input-verb1-s');
const input4 = document.getElementById('input-noun3');
const input5 = document.getElementById('input-verb2');
const input6 = document.getElementById('input-noun2-part');
// button
const button = document.getElementById('madlib-button');
//event listener, click that bad boy
button.addEventListener('click', () => {
    displayNoun1.textContent = input1.value;
    displayNoun2.textContent = input2.value;
    displayVerb1S.textContent = input3.value;
    displayNoun3.textContent = input4.value;
    displayVerb2.textContent = input5.value;
    displayNoun2Part.textContent = input6.value;
    displayTextBody.style.display = 'block';
});