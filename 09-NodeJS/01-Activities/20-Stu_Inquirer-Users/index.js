const inquirer = require('inquirer');
const fs = require('fs');

function start(){
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What languages do you know?',
      name: 'languages',
    },
    {
      type: 'input',
      message: 'What is your preferred method of communication?',
      name: 'method',
    },
  ])
  .then(answers =>{
    console.log(answers);
    const answersString = `My name is ${answers.username}. I know ${answers.languages}. My preferred method of communication is ${answers.method}.`;
    fs.writeFileSync('data.js', JSON.stringify(answersString));
    fs.writeFileSync('data.md', (answersString));
  })
}

start();