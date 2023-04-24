let prompt = require('prompt-sync')();

let score = 0;

const questions = [
    {
        q: 'Who is Germany President?',
        options: ['Steinmeier', 'Olaf Schulz'],
        answer: 0
    },
    {
        q: 'In which continent located Turkey ?',
        options: ['America', 'Europa and Asia'],
        answer: 1
    },
    {
        q: 'How many countries exist in EU ?',
        options: ['27', '23'],
        answer: 0
    },
    {
        q: 'Where was invented Bicycle for the first time ?',
        options: ['America', 'Russia'],
        answer: 1
    }
]

for (const key in questions) {
    if (questions.hasOwnProperty(key)) {
        const singleQ = questions[key];
        console.log(singleQ.q);
        // console.log(singleQ.options.join(', '));
        for (const iterator in singleQ.options) {
            console.log(`${iterator}. ${singleQ.options[iterator]}`);
        }
        let ansIndex = parseInt(prompt('select 0 or 1 ! '));
        if (singleQ.answer === ansIndex) {
            score++;
        } else {
            score--;
        }
    }
}

console.log('Your Score is : ', score);




