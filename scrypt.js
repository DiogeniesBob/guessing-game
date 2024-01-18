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
const functionsdrop = document.getElementById('functionsdrop');
numberBox2.addEventListener('change', checkNumber2);
var newNumber2;


function checkNumber2() {
    const varriable = numberBox2.value;
    console.log(functionsdrop.value)
    if (functionsdrop.value === "cubed"){
    newNumber2 = (varriable)**3;
    }
    else if (functionsdrop.value === "2x+7"){
    newNumber2 = ((varriable)*2)+7;
    }
    else if (functionsdrop.value === "squared"){
    newNumber2 = (varriable)**2;
    }
    else if (functionsdrop.value === "Dubbled"){
    newNumber2 = (varriable)*2;
    }

    outputBox2.innerText = newNumber2;
} 