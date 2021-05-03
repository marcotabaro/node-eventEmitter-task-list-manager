const EventEmitter = require('events');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});//readline is a built-in Node module for read input users

const client = new EventEmitter();
const server = require('./server')(client);


rl.on('line', (input) => {
    client.emit('command', input);
});