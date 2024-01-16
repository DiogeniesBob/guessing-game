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






//number squared

const numberBox2 = document.getElementById('numberfuntion');
const outputBox2 = document.getElementById('output2');
numberBox2.addEventListener('change', checkNumber2);


function checkNumber2() {
    const varriable = numberBox2.value;
    const newNumber2 = (varriable)**2;

    outputBox2.innerText = newNumber2;
} 