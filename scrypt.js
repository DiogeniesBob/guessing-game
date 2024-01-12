const numberBox = document.getElementById('guess');
const outputBox = document.getElementById('output');
const newNumber = Math.floor(Math.random()*10000);

numberBox.addEventListener('change', checkNumber);

function checkNumber() {
    const guess = numberBox.value;
    if(guess < newNumber){
        outputBox.innerText = 'thats too low!';
    }
    if(guess > newNumber){
        outputBox.innerText = 'thats too high!';
    }
    if(guess = newNumber){
        outputBox.innerText = 'thats too high!';
    }
}
