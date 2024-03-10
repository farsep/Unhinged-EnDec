function encrypt(text) {
    let encryptedText = text;
    encryptedText = encryptedText.replace(/e/g, "enter");
    encryptedText = encryptedText.replace(/i/g, "imes");
    encryptedText = encryptedText.replace(/a/g, "ai");
    encryptedText = encryptedText.replace(/o/g, "ober");
    encryptedText = encryptedText.replace(/u/g, "ufat");
    return encryptedText;
}

function decrypt(text) {
    let decryptedText = text;
    decryptedText = decryptedText.replace(/enter/g, "e");
    decryptedText = decryptedText.replace(/imes/g, "i");
    decryptedText = decryptedText.replace(/ai/g, "a");
    decryptedText = decryptedText.replace(/ober/g, "o");
    decryptedText = decryptedText.replace(/ufat/g, "u");
    return decryptedText;
}

// Example usage:
const originalText = "gato";
const encrypted = encrypt(originalText);
const decrypted = decrypt(encrypted);

console.log(`Original: ${originalText}`);
console.log(`Encrypted: ${encrypted}`);
console.log(`Decrypted: ${decrypted}`);

function createParagraph(a) {
    let newElement = document.createElement("p");
    let text = document.createTextNode(a);
    para.appendChild(node);
}

function encryptText(){
    const inputText = document.getElementById('text-input').value;
    document.getElementsByClassName('second').appendChild(createParagraph(encrypt(inputText)))
    document.getElementsByClassName('second-central').display = "none";
};

function decryptText(){
    const inputText = document.getElementById('text-input').value;
    document.getElementsByClassName('second').appendChild(createParagraph(decrypt(inputText)))
    document.getElementsByClassName('second-central').display = "none";
};