const   infoField                     = document.getElementById("info-field"),
                lettersLength                 = document.getElementById("letters-length"),
                wordsLength                   = document.getElementById("words-length"),
                sentenceLength                = document.getElementById("sentence-length"),
                generateLavenderColor         = document.getElementById("generate-lavender-color");
                generateColor                 = document.getElementById("generate-color"),
                lavenderColors                = [
                                                    '#E6E6FA', // Light Lavender
                                                    '#D8BFD8', // Thistle
                                                    '#D6AEDD', // Light Lavender Purple
                                                    '#B57EDC', // Lavender Purple
                                                    '#A1A6D8'  // Pastel Lavender
                                                ];
        
infoField.addEventListener('keyup', function() {
    const infoFieldVal = infoField.value;
    lettersLength.innerHTML = (infoFieldVal).length;
    wordsCount(infoFieldVal);
    sentenceCount(infoFieldVal);
})

function wordsCount(sentence) {
    const words         = sentence.split(' ');
    let withoutEmptyArr = words.filter(el => el !== '')
    wordsLength.innerHTML = withoutEmptyArr.length;
}

function sentenceCount(sentence) {
    const words         = sentence.split(/\.(?:\s+|$)/);
    let withoutEmptyArr = words.filter(el => el !== '');
    sentenceLength.innerHTML = withoutEmptyArr.length;
}

generateColor.addEventListener('click', function() {
    const red               = Math.floor(Math.random()*256);
    const green             = Math.floor(Math.random()*256);
    const blue              = Math.floor(Math.random()*256);
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
})

generateLavenderColor.addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * lavenderColors.length);
    document.body.style.backgroundColor = lavenderColors[randomIndex];
})