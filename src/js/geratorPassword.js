//select of password gerator
const select = document.getElementById('checked_type_password');
//select of password type word
const selectTypeWord = document.getElementById('checked_type_word'); 
//result
const campResult = document.querySelector('.result');  

// camp of numbers caracters 

const campCaracters = document.querySelector('.quant'); 

//numbers random
const numbersRandom = Math.floor(Math.random() * 100000000); 
var password = ''; 

// random letters 
function stringCaractersRandom() {
    let size = document.getElementById('quantWordsOrLetters').value; 
    var stringRandom = '';
    var caraters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    for (var i = 0; i < size; i++) {
        stringRandom += caraters.charAt(Math.floor(Math.random() * caraters.length));
    }
    password = stringRandom
    return stringRandom;
}

// random letters and numbers
function stringRandomNumbersAndLetters() {
    let size = document.getElementById('quantWordsOrLetters').value; 
    var numbersAndNumbers = '';
    var caraters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < size; i++) {
        numbersAndNumbers += caraters.charAt(Math.floor(Math.random() * caraters.length));
    }
    return numbersAndNumbers;
}


select.addEventListener('change', function() {
    if (select.value == 'Apenas números') {
        campCaracters.style.display = 'none';
        password = numbersRandom.toFixed(0);
        return 
    }

    if (select.value == 'Apenas letras') {
        campCaracters.style.display = 'block';
        password = stringCaractersRandom();
        return 
    }

    if (select.value == 'Letras e números') {
        campCaracters.style.display = 'block';
        password = stringRandomNumbersAndLetters();
    }
})

const geratorPassword = () => {
    campResult.innerHTML = password; 
    if (select.value == 'Apenas números') {
        return password = Math.floor(Math.random() * 100000000); 
    } 

    if (select.value == 'Apenas letras') {
        return password = stringCaractersRandom(); 
    }

    if (select.value == 'Letras e números') {
        return password = stringRandomNumbersAndLetters()
    }
}   