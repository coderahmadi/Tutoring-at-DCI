
const promSync = require('prompt-sync');
let showPrompt = promSync();
let repeat = '';

do {
    let secretNumber = Math.ceil(Math.random() * 99);
    let attemptsLeft = 5;
    // game should be done at least once!
    gamePlay(secretNumber, attemptsLeft);
    // you should ask player to confirm if they want to play again.
    repeat = showPrompt('Do you want to play again ? type (yes/no) ');
    repeat = repeat.trim();
    repeat = repeat.toLowerCase();

} while (repeat === 'yes');


function gamePlay(seNum, attmpt) {
    while (attmpt > 0) {
        let inputByplayer = Number(showPrompt('Please Inter Number between 1 and 100: '));
        if (inputByplayer === seNum) {
            console.log('Wow 🥳, you won the game!');
            break;
        } else if (inputByplayer > seNum) {
            attmpt--;
            console.log(`Number is too high than secret number 🤢, Attempt left: ${attmpt}`);

        } else if (inputByplayer < seNum) {
            attmpt--;
            console.log(`Number is too low than secret number 🤢, Attempt left: ${attmpt}`);

        }
    }
    if (attmpt === 0) {
        console.log(`You lost, the secret number was ${seNum}`);
    }
}







