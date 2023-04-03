const prmptSync = require("prompt-sync");
let userGuesWord = prmptSync();

let predefinedArrayList = ["Afghanistan", "Albania", "Algeria", "AndorrA", "Angola", "Anguilla", "Antarctica", "Argentina", "Armenia",
    "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda",
    "Bhutan", "Bolivia", "Botswana", "Brazil", "Bulgaria", "Burundi", "Cambodia", "Cameroon", "Canada", "Chad", "Chile", "China",
    "Colombia", "Comoros", "Congo", "Croatia", "Cuba", "Cyprus", "Czech", "Denmark", "Djibouti", "Dominica", "Dominican", "Ecuador",
    "Egypt", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana",
    "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guyana", "Haiti", "Honduras",
    "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica",
    "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea", "Kuwait", "Kyrgyzstan", "Latvia", "Lebanon", "Lesotho",
    "Liberia", "Liechtenstein", "Lithuania", "Luxembourg", "Macao", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
    "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique",
    "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Nicaragua", "Niger", "Nigeria", "Niue", "Norway", "Oman", "Pakistan", "Palau",
    "Palestinian", "Panama", "Papua", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar",
    "Reunion", "Romania", "Russian", "RWANDA", "Samoa", "Senegal", "Serbia", "Seychelles", "Singapore", "Slovakia", "Slovenia",
    "Somalia", "Spain", "Sudan", "Swaziland", "Sweden", "Switzerland", "Syrian", "Taiwan", "Tajikistan",
    "Tanzania", "Thailand", "Togo", "Tokelau", "Tonga", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine",
    "England", "America", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Yemen", "Zambia", "Zimbabwe",
];
let hintArray = [
    "AF", "AL", "DZ", "AD", "AO", "AI", "AQ", "AR", "AM", "AW", "AU", "AT", "AZ", "BS", "BH", "BD", "BB", "BY", "BE", "BZ", "BJ", "BM", "BT", "BO",
    "BW", "BR", "BG", "BI", "KH", "CM", "CA", "TD", "CL", "CN", "CO", "KM", "CG", "HR", "CU", "CY", "CZ", "DK", "DJ", "DM", "DO", "EC", "EG", "ER",
    "EE", "ET", "FJ", "FI", "FR", "GA", "GM", "GE", "DE", "GH", "GI", "GR", "GL", "GD", "GP", "GU", "GT", "GG", "GN", "GY", "HT", "HN", "HU",
    "IS", "IN", "ID", "IR", "IQ", "IE", "IM", "IL", "IT", "JM", "JP", "JE", "JO", "KZ", "KE", "KI", "KR", "KW", "KG", "LV", "LB", "LS", "LR", "LI",
    "LT", "LU", "MO", "MK", "MG", "MW", "MY", "MV", "ML", "MT", "MQ", "MR", "MU", "YT", "MX", "MC", "MN", "ME", "MS", "MA", "MZ", "MM", "NA", "NR",
    "NP", "NL", "NI", "NE", "NG", "NU", "NO", "OM", "PK", "PW", "PS", "PA", "PG", "PY", "PE", "PH", "PN", "PL", "PT", "PR", "QA", "RE", "RO", "RU",
    "RW", "WS", "SN", "RS", "SC", "SG", "SK", "SI", "SO", "ES", "SD", "SZ", "SE", "CH", "SY", "TW", "TJ", "TZ", "TH", "TG", "TK", "TO", "TN",
    "TR", "TM", "TV", "UG", "UA", "GB", "US", "UY", "UZ", "VU", "VE", "YE", "ZM", "ZW",
];

let rptAgain = "";

// game should be done at least once!
do {
    let secWordIndex = getRandomIndex(predefinedArrayList.length);
    let guessedWord = predefinedArrayList[secWordIndex];
    let hintTwo = hintArray[secWordIndex];
    let shuffledString = shuffleString(guessedWord.toLowerCase())
    let attemptsLeft = 3;

    guessWord(attemptsLeft, guessedWord.toLowerCase(), guessedWord, shuffledString, hintTwo);
    // you should ask player to confirm if they want to play again.
    rptAgain = userGuesWord("Do you want to play again ? type (yes/no) ");
    rptAgain = rptAgain.trim();
    rptAgain = rptAgain.toLowerCase();
} while (rptAgain === "yes");

function guessWord(attmpt, gsWrdSmal, exact,shuffleW, h2) {
    while (attmpt > 0) {
        let guess = userGuesWord(`Which country's name is this "${shuffleW}"? `);
        guess = guess.trim();
        guess = guess.toLowerCase();

        if (guess === gsWrdSmal) {
            console.log("Congradulation 🥳, You guessed correctly!");
            break;
        } else {
            if (attmpt === 3) {
                console.log(`Wrong Guess 😆, ${attmpt - 1} Attempts left, Hint: Word started with "${gsWrdSmal[0]}"`);
            }
            if (attmpt === 2) {
                console.log(`Wrong 😧,${attmpt - 1} Attempt left, Hint1: Started with "${gsWrdSmal[0]}", Hint2: Country Code is ${h2}`);
            }
            attmpt--;
        }
    }
    if (attmpt === 0) {
        console.log(`You lost, the country name was "${exact}"`);
    }
}





// this method returns random number between 0 - maxNum-1, including both,
function getRandomIndex(maxNum) {
    return Math.floor(Math.random() * maxNum);
}


// this function suffle it's parameter string (s)
function shuffleString(s) {
    let strArr = s.split('');
    for (let i = 0; i < strArr.length - 1; ++i) {
        let rndmIndx = getRandomIndex(strArr.length);
        let swap = strArr[i];
        strArr[i] = strArr[rndmIndx];
        strArr[rndmIndx] = swap;
    }
    s = strArr.join('');
    return s;
}
