const encodeBtn = document.getElementById('encode-btn');

const decodeBtn = document.getElementById('decode-btn');

const encodeTextarea = document.getElementById('encode');

const decodeTextarea = document.getElementById('decode');

const encode = (str) => {

    let encodedStr = '';

    for (let i = 0; i < str.length; i++) {

        encodedStr += '&#' + str.charCodeAt(i) + ';';

    }

    return encodedStr;

};

const decode = (str) => {

    let decodedStr = '';

    let charCode = '';

    for (let i = 0; i < str.length; i++) {

        if (str[i] === '&') {

            let j = i + 1;

            while (str[j] !== ';') {

                charCode += str[j];

                j++;

            }

            decodedStr += String.fromCharCode(parseInt(charCode));

            charCode = '';

            i = j;

        } else {

            decodedStr += str[i];

        }

    }

    return decodedStr;

};

encodeBtn.addEventListener('click', () => {

    const input = encodeTextarea.value;

    const output = encode(input);

    decodeTextarea.value = output;

});

decodeBtn.addEventListener('click', () => {

    const input = decodeTextarea.value;

    const output = decode(input);

    encodeTextarea.value = output;

});

