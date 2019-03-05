console.log("main.js")

const conjunction = function (firstWord, secondWord) {
    const conjoinedWord = `${firstWord} ${secondWord}`
    return conjoinedWord;
}

conjunction("Master", "Card")
//console.log needs to have function call w/arguments passed through to actually work.
// console.log(conjoinedWord)
console.log(conjunction("Master", "Card"));