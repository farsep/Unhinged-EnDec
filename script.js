// Select the elements
let second = document.querySelector('.second');

let resultPClass;
let copyBtnClass;

let resultPId;
let copyBtnId;


function setAfterBTN(){
    resultPId = document.getElementById('result-p');
    copyBtnId = document.getElementById('copy-btn');

    copyBtnClass = document.getElementsByClassName('copy-btn')[0];
    resultPClass = document.getElementsByClassName('result-p')[0];
    // Set the styles
    resultPId.style.fontSize = '1.2em';
    resultPId.style.width = '95%';
    resultPId.style.boxSizing = 'border-box';
    resultPId.style.color = 'var(--gray-400)';
    

    second.style.display = 'flex';
    second.style.flexDirection = 'column';
    second.style.justifyContent = 'space-between';
    second.style.boxSizing = 'border-box';
    second.style.padding = '2%';

    copyBtnId.style.fontSize = '1.5em';
    copyBtnId.style.color = 'var(--dark-blue-300)';
    copyBtnId.style.width = '100%';
    copyBtnId.style.height = '2.5em';
    copyBtnId.style.border = '1px solid var(--dark-blue-300)';
    copyBtnId.style.borderRadius = '1em';
    copyBtnId.onclick = copyText;
    copyBtnClass.style.transition = '0.5s';
    copyBtnClass:hover = 'background-color: var(--black-blue-200)';

}

function generateElements(elementType, textContent, className, a) {
    let newElement = document.createElement(elementType);
    let textNode = document.createTextNode(textContent);
    newElement.appendChild(textNode);

    // Check if a class name is provided and add it to the new element
    if (className) {
        newElement.classList.add(className);
    }

    newElement.id = a;

    return newElement;
}

function generateStyles(){
    const style = document.createElement('style');
    style.innerHTML = `
    .copy-btn {
        background-color: var(--light-blue-100);
    }
    .copy-btn:hover {
        cursor: pointer; 
        background-color: var(--light-blue-400);
    }
    `
    document.head.appendChild(style);
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
    
    newElement.id = "result-p";

    return newElement;
}


function encryptText(){
    const inputText = document.getElementById('text-input').value;
    if (inputText === "") {
        alert("Please enter a text to encrypt");
        return;
    }
    if(resultPId!=null && copyBtnId!=null){
        resultPId.remove();
        copyBtnId.remove();
    }
    const paragraph = createParagraph(encrypt(inputText), 'result-p');
    const targetElement = document.getElementsByClassName('second')[0]; // Specify the element index
    targetElement.appendChild(paragraph);
    document.getElementsByClassName('second-central')[0].style.display = "none"; // Correctly access the style property
    let newButton = generateElements("button", "Copy", "copy-btn", "copy-btn");
    targetElement.appendChild(newButton);
    setAfterBTN();
    generateStyles();
    Swal.fire({
        title: 'ENCRYPTED!',
        text: 'You can proceed to copy the encrypted text!',
        icon: 'success',
        confirmButtonText: 'Yeah!'
      })

};

function decryptText(){
    const inputText = document.getElementById('text-input').value;
    if (inputText === "") {
        alert("Please enter a text to decrypt");
        return;
    }
    if(resultPId!=null && copyBtnId!=null){
        resultPId.remove();
        copyBtnId.remove();
    }
    const paragraph = createParagraph(decrypt(inputText), 'result-p');
    const targetElement = document.getElementsByClassName('second')[0]; // Specify the element index
    targetElement.appendChild(paragraph);
    document.getElementsByClassName('second-central')[0].style.display = "none"; // Correctly access the style property
    let newButton = generateElements("button", "Copy", "copy-btn", "copy-btn");
    targetElement.appendChild(newButton);
    document.getElementById('btn-decode').textContent = "Decrypt!";
    setAfterBTN();
    generateStyles();
    Swal.fire({
        title: 'DECRYPTED!',
        text: 'You can proceed to copy the decrypted text!',
        icon: 'success',
        confirmButtonText: 'Yeah!'
      })
};

function copyText(){
    let text = document.getElementById('result-p').textContent;
    navigator.clipboard.writeText(text);

    copyBtnId.textContent = "Copied!";
}

//ADD DOM BY USERAGENT

addEventListener('DOMContentLoaded', function(){
    let {userAgent} = navigator;
    let isTablet = userAgent.match(/iPad|android|iPhone|Tablet|Mobile/i);
    if (isTablet) {
        document.getElementById('text-input').placeholder = 'Ingrese el Texto Aqui';
        let styles = document.createElement('style');
        styles.innerHTML = `
        .center > h1 {
            display: none;
        }

        #text-input::placeholder {
            font-size: 1em;
            color: var(--dark-blue-300);
        }    
        `
        document.head.appendChild(styles);
    }
})



