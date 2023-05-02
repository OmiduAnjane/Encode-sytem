function encode() {

    const input = document.getElementById('input').value;

    let output = '';

    for (let i = 0; i < input.length; i++) {

        let c = input.charAt(i);

        // Check if it's the second letter of a word

        if (i > 0 && input.charAt(i - 1) !== ' ' && c !== ' ') {

            c = '&xx/xx&' + c;

        }

        output += c;

    }

    document.getElementById('output').value = output;

}

function decode() {

    const input = document.getElementById('input').value;

    let output = '';

    for (let i = 0; i < input.length; i++) {

        let c = input.charAt(i);

        // Check if it's the second letter of a word

        if (i > 1 && input.charAt(i - 2) !== '&xx' && c === '/xx&') {

            // Remove the 'ස්කො' from the letter

            output = output.slice(0, -3);

        } else {

            output += c;

        }

    }

    document.getElementById('output').value = output;

}

