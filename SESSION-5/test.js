// this function suffle it's parameter string (s)
function shuffleString(s) {
    let strArr = s.split('');
    for (let i = 0; i < strArr.length - 1; i++) {
        let rndmIndx = Math.floor(Math.random() * strArr.length);
        let swap = strArr[i];
        strArr[i] = strArr[rndmIndx];
        strArr[rndmIndx] = swap;
    }
    s = strArr.join('');
    return s;
}

console.log(shuffleString('Geemany')); 