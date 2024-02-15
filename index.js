//import inquirer
const inquirer = require('inquirer');
//import wrtieFile
const { writeFile } = require("fs");
//import Shapes class 
const { Circle, Square, Triangle } = require('./lib/shapes')


// Create an array of questions for user input
const questions = [
    'Enter text for the logo. (Should be less than or equal to 3 characters)',
    'Enter a text color keyword (OR a hexadecimal number)',
    'Select a shape',
    'Enter a Shape color. Enter a color keyword (OR a hexadecimal number)'
];

// Create a function to write file
function writeToFile(fileName ='output.svg',userInput) {
    const selectedShapeClass = userInput.shape === 'Circle'
      ? Circle
      : userInput.shape === 'Square'
      ? Square
      : Triangle;
  
    fileName = userInput.shape + '.svg';
  
    const shapeInstance = new selectedShapeClass(userInput.text, userInput.textColor, userInput.shapeColor);
  
    writeFile(`./output/${fileName}`, shapeInstance.render(), (err) => {
      if (err) {
        console.error('Error writing to file:', err);
      } else {
        console.log('SVG created successfully.');
      }
    });
  }
  

//Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'text',
                message: questions[0],
                validate: (input) => input.length <= 3 || 'Please enter 3 characters or less.',
            },
            {
                type: 'input',
                name: 'textColor',
                message: questions[1],
                validate: (input) => input.length > 0 || 'Text color is required.',
            },
            {
                type: 'list',
                name: 'shape',
                message: questions[2],
                choices: ['Triangle', 'Circle', 'Square'],
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: questions[3],
                validate: (input) => input.length > 0 || 'Shapes color is required.',
            }
        ])
        .then((answers) => {
            writeToFile('output.svg', answers);
        })
        .catch((error) => {
            console.error('Error during inquirer prompt:', error);
          });
}

// Function call to initialize app
init();