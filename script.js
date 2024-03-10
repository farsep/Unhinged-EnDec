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
    const paragraph = createParagraph(encrypt(inputText), 'result-p');
    const targetElement = document.getElementsByClassName('second')[0]; // Specify the element index
    targetElement.appendChild(paragraph);
    document.getElementsByClassName('second-central')[0].style.display = "none"; // Correctly access the style property
    let newButton = generateElements("button", "Copy", "copy-btn");
    targetElement.appendChild(newButton);
};

function decryptText(){
    const inputText = document.getElementById('text-input').value;
    const paragraph = createParagraph(decrypt(inputText), 'result-p');
    const targetElement = document.getElementsByClassName('second')[0]; // Specify the element index
    targetElement.appendChild(paragraph);
    document.getElementsByClassName('second-central')[0].style.display = "none"; // Correctly access the style property
    let newButton = generateElements("button", "Copy", "copy-btn");
    targetElement.appendChild(newButton);
};


