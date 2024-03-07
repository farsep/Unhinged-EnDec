document.querySelector('.encrypt-btn').addEventListener('click', function() {
    // Add your encryption logic here
});

document.querySelector('.decrypt-btn').addEventListener('click', function() {
    // Add your decryption logic here
});

document.querySelector('.copy-btn').addEventListener('click', function() {
    // Copy text logic
    const outputText = document.querySelector('.output-area p').textContent;
    navigator.clipboard.writeText(outputText).then(() => {
        alert('Text copied to clipboard');
    });
});
