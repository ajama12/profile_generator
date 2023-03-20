const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  rl.question("What's your hobby? ", (answer2) => {
    rl.question("What kind of music do you like? ", (answer3) => {
      rl.question("What's your favorite meal (eg: dinner, brunch, etc.)? ",
        (answer4) => {
          rl.question("What do you like to eat for that meal? ", (answer5) => {
            rl.question(
              "Which sport is your absolute favourite? ",
              (answer6) => {
                rl.question(
                  "What is your superpower? In a few words, tell us what you are amazing at! ",
                  (answer7) => {
                    console.log(
                      `My name is ${answer}! For fun I like ${answer2}. My favourite genre of music is  ${answer3}. My favourite meal is ${answer4}, and I love to eat ${answer5}! My favourite sport is ${answer6}. And ${answer7} is my superpower!`
                    );
                    rl.close();
                  }
                );
              }
            );
          });
        }
      );
    });
  });
});
