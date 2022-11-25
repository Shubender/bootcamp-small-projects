const chalk = require("chalk");

const readline = require("readline");
// we need to create the command line interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let color;
// Ask a color
rl.question("Choose your color: ", function (answer) {
    color = answer;
    console.log("Your color is: ", chalk.keyword(color)(color));
    askQuestion(currentQuestion, currentAnswers);
});

const story = {
    q: "Welcome to The Land Of Wizards! Would you like to play? [yes | no]: ",
    answers: {
        yes: {
            q: "You are alone in a dark forest and facing a fork in the road. Which direction do you turn? [left | right]: ",
            answers: {
                left: {
                    q: "There's a scary wizard! He asks you a tough question. What's 1+1? ",
                    answers: {
                        2: "Congratulations!",
                        1: "No, now you'll be kneeling on buckwheat!",
                    },
                },
                right: "This was not the right choice. Goodbye!",
            },
        },
        no: "Alright then. Enjoy your day!",
    },
};

// get the first answer and question
let currentQuestion = story.q;
let currentAnswers = story.answers;

function askQuestion(question, answers) {
    question = chalk.keyword(color)(question);
    rl.question(question, function (input) {
        // determine if the user input is valid
        if (!answers[input]) {
            console.log(chalk.red("Please type correct answer!"));
            askQuestion(question, answers);
            return;
        }
        // check if the story has ended
        if (input === "no") {
            console.log(chalk.keyword(color)(answers[input]));
            rl.close();
            return;
        }

        if (input === "right") {
            console.log(chalk.keyword(color)(answers[input]));
            rl.close();
            return;
        }

        if (input === "2" || input === "1") {
            console.log(chalk.keyword(color)(answers[input]));
            rl.close();
            return;
        }
        // here we call the same function again with a new question and
        // new answers
        currentQuestion = answers[input].q;
        currentAnswers = answers[input].answers;
        askQuestion(currentQuestion, currentAnswers);

        // rl.close();
    });
}


