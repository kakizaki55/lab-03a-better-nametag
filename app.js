const fullName = document.getElementById('full-name');

const button = document.getElementById('generate');
const yourName = document.getElementById('your-name');

let count = 0;
const display = document.getElementById('display');


button.addEventListener('click', ()=> {
    let newName = yourName.value;
    fullName.textContent = newName;
    count ++ ;
    display.innerHTML = count ;
});

const colorButton = document.getElementById('color-button');
const newColor = document.getElementById('new-color');
const idBackground = document.getElementById('id-background');



colorButton.addEventListener('click', () =>{
    idBackground.style.backgroundColor = newColor.value;
    count ++ ;
    display.innerHTML = count ;
    //console.log(newColor.value);

});


const pronounButton = document.getElementById('pronoun-button');
const pronoun = document.getElementById('pronoun');
const newPronoun = document.getElementById('new-pronoun');

pronounButton.addEventListener('click', () =>{
    count ++ ;
    display.innerHTML = count ;
    //console.log(newPronoun.value);
    pronoun.textContent = newPronoun.value;
});

