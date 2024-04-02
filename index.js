function swapCase() {
    const inputString = document.getElementById('inputString').value;
    const outputString = swapCaseFunction(inputString);
    document.getElementById('output').textContent = "Swapped Case: " + outputString;
}

function swapCaseFunction(inputString) {
    let swappedString = '';
    for (let i = 0; i < inputString.length; i++) {
        const char = inputString[i];
        if (char === char.toUpperCase()) {
            swappedString += char.toLowerCase();
        } else {
            swappedString += char.toUpperCase();
        }
    }
    return swappedString;
}