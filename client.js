const EventEmitter = require('events');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});//readline is a built-in Node module for read input users

const client = new EventEmitter();
const server = require('./server')(client);
server.on('response', (resp) => {
    process.stdout.write('\u001B[2J\u001B[0;0f'); //this clear the terminal
    process.stdout.write(resp); //write the response
    process.stdout.write('\n\> '); //the terminal can receive other command
})

rl.on('line', (input) => {
    client.emit('command', input);
});