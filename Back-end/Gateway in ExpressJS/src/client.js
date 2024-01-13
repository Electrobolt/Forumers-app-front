const {io} = require('socket.io-client');

const client = io('http://localhost:9092');

//client.connect('localhost:9092');

client.on("hello", (arg) => {
    console.log(arg); 
});

//client.emit('facturation', JSON.stringify({message: '123'}));
//client.emit('disconnect', JSON.stringify({}));
client.emit();