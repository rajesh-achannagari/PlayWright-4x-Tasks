console.log("Hello World!");


// User input
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question('Enter a name: ', (name) => {
    console.log(`Hello, ${name}!`);
    readline.close();
});
