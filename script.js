
// Select the elements
let second = document.querySelector('.second');

let resultP;
let copyBtn;


function setAfterBTN(){
    resultP = document.querySelector('.result-p');
    copyBtn = document.querySelector('.copy-btn');
    // Set the styles
    resultP.style.fontSize = '1.2em';
    resultP.style.color = 'var(--gray-400)';
    resultP.style.padding = '1.2%';

    second.style.display = 'flex';
    second.style.flexDirection = 'column';
    second.style.justifyContent = 'space-between';
    second.style.boxSizing = 'border-box';
    second.style.padding = '2%';

    copyBtn.style.fontSize = '1.5em';
    copyBtn.style.color = 'var(--dark-blue-300)';
    copyBtn.style.width = '100%';
    copyBtn.style.height = '2.5em';
    copyBtn.style.backgroundColor = 'var(--light-blue-100)';
    copyBtn.style.border = '1px solid var(--dark-blue-300)';
    copyBtn.style.borderRadius = '1em';
}

function generateElements(elementType, textContent, className) {
    let newElement = document.createElement(elementType);
    let textNode = document.createTextNode(textContent);
    newElement.appendChild(textNode);

    // Check if a class name is provided and add it to the new element
    if (className) {
        newElement.classList.add(className);
    }

    return newElement;
}

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
function createParagraph(textContent, className) {
    let newElement = document.createElement("p");
    let textNode = document.createTextNode(textContent);
    newElement.appendChild(textNode);

    // Check if a class name is provided and add it to the paragraph
    if (className) {
        newElement.classList.add(className);
    }

    return newElement;
}


function encryptText(){
    const inputText = document.getElementById('text-input').value;
    if (inputText === "") {
        alert("Please enter a text to encrypt");
        return;
    }
    if(resultP!=null && copyBtn!=null){
        resultP.remove();
        copyBtn.remove();
    }
    const paragraph = createParagraph(encrypt(inputText), 'result-p');
    const targetElement = document.getElementsByClassName('second')[0]; // Specify the element index
    targetElement.appendChild(paragraph);
    document.getElementsByClassName('second-central')[0].style.display = "none"; // Correctly access the style property
    let newButton = generateElements("button", "Copy", "copy-btn");
    targetElement.appendChild(newButton);
    setAfterBTN();
};

function decryptText(){
    const inputText = document.getElementById('text-input').value;
    if (inputText === "") {
        alert("Please enter a text to decrypt");
        return;
    }
    if(resultP!=null && copyBtn!=null){
        resultP.remove();
        copyBtn.remove();
    }
    const paragraph = createParagraph(decrypt(inputText), 'result-p');
    const targetElement = document.getElementsByClassName('second')[0]; // Specify the element index
    targetElement.appendChild(paragraph);
    document.getElementsByClassName('second-central')[0].style.display = "none"; // Correctly access the style property
    let newButton = generateElements("button", "Copy", "copy-btn");
    targetElement.appendChild(newButton);
    setAfterBTN();
};

copyBtn.addEventListener('click', function() {
    const text = resultP.value;
    navigator.clipboard.writeText(text);
});

