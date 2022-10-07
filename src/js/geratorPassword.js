var select = document.getElementById('checked_type_password')
const campResult = document.querySelector('.result'); 

//numbers random
const numbersRandom = Math.floor(Math.random() * 100000000); 
var password = ''; 

// random letters 
function stringCaractersRandom() {
    var stringRandom = '';
    var caraters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    for (var i = 0; i < 8; i++) {
        stringRandom += caraters.charAt(Math.floor(Math.random() * caraters.length));
    }
    password = stringRandom
    return stringRandom;
}

// random letters and numbers
function stringRandomNumbersAndLetters() {
    var numbersAndNumbers = '';
    var caraters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 8; i++) {
        numbersAndNumbers += caraters.charAt(Math.floor(Math.random() * caraters.length));
    }
    return numbersAndNumbers;
}


select.addEventListener('change', function() {
    if (select.value == 'Apenas números') {
        password = numbersRandom.toFixed(0);
        return 
    }

    if (select.value == 'Apenas letras') {
        password = stringCaractersRandom();
        return 
    }

    if (select.value == 'Letras e números') {
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