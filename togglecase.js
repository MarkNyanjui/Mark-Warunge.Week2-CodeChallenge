
function swapCase(text) {

    let result = ' '
// iterate over all characters in the text
    for (let i = 0; i < text.length; i++) {
        const char = text[i]
        // Checks if the character is in uppercase
        if (char === char.toUpperCase()) {
            result += char.toLowerCase()
            // Checks if the character is in lowercase
        } else if (char === char.toLowerCase()) {
            result += char.toUpperCase()
        } else {
            result += char
        }
    }
    return result
}
// Test for the function
console.log(swapCase('The Quick Brown Fox'))


