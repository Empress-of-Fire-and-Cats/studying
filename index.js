const btnSearch = document.querySelector('.btn-search');
const inputString = document.querySelector('.input-string');
const inputLetter = document.querySelector('.input-letter');
const textResOne = document.querySelector('.text-res-one');
const textResTwo = document.querySelector('.text-res-two');
const res = document.querySelector('.res');

btnSearch.addEventListener("click", () => findLetter(inputString.value, inputLetter.value));

const findLetter = (str, letter) => {
    let counter = 0;
    str = str.toLowerCase();
    for(let i = 0; i < str.length; i++) {
        if(str[i] == letter) counter++;
    }
    console.log(counter);
    textResOne.style.visibility = 'visible';
    textResTwo.textContent = inputLetter.value;
    textResTwo.style.visibility = 'visible';
    res.textContent = counter;
}



