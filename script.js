const messageInput = document.getElementById('message');

const keyInput = document.getElementById('key');

const resultOutput = document.getElementById('result');

const encryptBtn = document.getElementById('encrypt');

const decryptBtn = document.getElementById('decrypt');

encryptBtn.addEventListener('click', () => {

	const message = messageInput.value;	const key = keyInput.value;

	if (!message || !key) {

		alert('Please enter a message and a key');

		return;

	}

	const encryptedMessage = encrypt(message, key);

	resultOutput.value = encryptedMessage;

});

decryptBtn.addEventListener('click', () => {

	const message = resultOutput.value;

	const key = keyInput.value;

	if (!message || !key) {

		alert('Please enter a message and a key');

		return;

	}

	const decryptedMessage = decrypt(message, key);

	messageInput.value = decryptedMessage;

});

function encrypt(message, key) {

	let encrypted = '';

	for (let i = 0; i < message.length; i++) {

		const charCode = message.charCodeAt(i) ^ key.charCodeAt(i % key.length);

		encrypted += String.fromCharCode(charCode);

	}

	return encrypted;

}

function decrypt(message, key) {

	let decrypted = '';

	for (let i = 0; i < message.length; i++) {

		const charCode = message.charCodeAt(i) ^ key.charCodeAt(i % key.length);

		decrypted += String.fromCharCode(charCode);

	}

	return decrypted;

}
