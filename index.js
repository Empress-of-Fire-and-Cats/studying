const btn__search = document.querySelector('.btn__search');
const input = document.querySelector('.input');
const text__res__one = document.querySelector('.text__res__one');
const text__res__two = document.querySelector('.text__res__two');
const res = document.querySelector('.res');


btn__search.addEventListener("click", () => findLetter(input.value));

const findLetter = (str) => {
    const letter = 'd';
    let counter = 0;
    str = str.toLowerCase();
    for(let i = 0; i < str.length; i++) {
        if(str[i] == letter) counter++;
    }
    console.log(counter);
    text__res__one.style.visibility = 'visible';
    text__res__two.style.visibility = 'visible';
    res.textContent = counter;
}



