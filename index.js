let chars = '';
const button = document.getElementById('my-button');

//Button click handling
button.addEventListener('click', () => {
    const resultScreen = document.getElementById('result');
    let length = document.getElementById('length').value;
    let lowerCase = document.getElementById('lower-case').checked;
    let upperCase = document.getElementById('upper-case').checked;
    let allowNumbers = document.getElementById('numbers').checked;
    let allowSymbols = document.getElementById('symbols').checked;
    let result = '';
    if(length != 0 && (lowerCase || upperCase || allowSymbols || allowNumbers)) {
        if(lowerCase) {
            chars += 'abcdefghijklmnoprstuwxyz';
        }

        if(upperCase) {
            chars += 'ABCDEFGHIJKLMNOPRSTUWXYZ';
        }

        if (allowNumbers) {
            chars += '1234567890';
        }

        if (allowSymbols) {
            chars += '/()_';
        }

        //generating password
        result = generatePassword(length, chars);
        chars = '';

        resultScreen.value = result;
    }
}); 


function generatePassword(length, chars) {
    let password = '';
    for (let i = 0 ; i < length ; i++) {
        let random = Math.floor(Math.random() * chars.length);
        let randomChar = chars[random];

        password += randomChar;
    }

    return password;
}