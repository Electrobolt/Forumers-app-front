import * as command from './command.js'
import * as routine from './routine.js'

import readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';
const read = readline.createInterface({ input, output });

console.log("Welcome here");

read.resume();
read.prompt();
read.on('line', (line) => {

    switch (command.verify(line)) {
        case command.ADD_TOKEN:
            routine.authenticate(line.trim().split(" ")[2]);
            break; 
        
        case command.SET_TUNNEL:
            routine.setTunnel(line.trim().split(" ")[1]);
            break;

    }
});

