const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};
function blockToMorse(block10) {
    const i1 = block10.indexOf('1');
    block10 = block10.substring(i1);
    let morse = '';
    for (let i = 0; i < block10.length; i += 2) {
        const code = block10[i] + block10[i + 1];
        morse += code === '10' ? '.' : '-';
    }
    return morse;
}
function morseToLetter(morse) {
    return MORSE_TABLE[morse];
}
function decode(expr) {
    // write your solution here
    let ret = '';
    for(let i = 0; i < expr.length; i += 10){
        const block10 = expr.substring(i, i + 10);
        if(block10[0] === '*'){
            ret += ' ';
        } else {
            const morse = blockToMorse(block10);
            const letter = morseToLetter(morse);
            ret += letter;
        }

    }
    return ret;
}

module.exports = {
    decode
}
