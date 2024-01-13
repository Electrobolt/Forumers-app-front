const express = require('express');
const https = require('https');
const fs = require('fs');
const socketio = require('socket.io');

const { Kafka, Partitioners } = require('kafkajs');

const kafkaClient = new Kafka({
  clientId: 'facturationConsumer',
  brokers: ['localhost:9092'],
  createPartitioner: Partitioners.LegacyPartitioner
});

const app = express();


// Configuring the TLS server
const options = {
  key: fs.readFileSync('./cle_privee.key'),
  cert: fs.readFileSync('./certificat.crt')
};

// Creation of the HTTPS server
const server = https.createServer(options, app);

// Initialization of socket.io on the HTTPS server
const io = socketio(server);

// Managing socket connections
const agentSockets = new Map();

io.on('connection', (socket) => {
  console.log(`A customer has connected`);

  // Add the agent socket to the map
  agentSockets.set(socket.id, socket);

  socket.on('send', (msg) => {
    switch (msg.action) {
      case 'auth':
        handleAuthentification(socket, msg);
        break;
      case 'tunnel':
        handleTunnel(socket, msg);
        break;
      default:
        console.log(msg);
        break;
    }
  });



  socket.on('disconnect', () => {
    console.log('A customer has disconnected');

    // Remove the agent socket from the map
    agentSockets.delete(socket.id);
  });
});

 function handleAuthentification(socket, msg){

    // If authentication succeeds
    // Send successful authentication message to client
    socket.emit('message', {event: 'auth', value:'ok'}); 

    // if failed closed socket
}

/* function handleTunnel(socket, msg){
  // If the creation succeeds
  // Send successful tunnel creation message to client
  socket.emit('message', {event: 'tunnel.ok'});
} */

const consumer = kafkaClient.consumer({ groupId: 'ngrokGroup' });
const consume = async () => {
  await consumer.connect();

  await consumer.subscribe({ topic: 'TLS', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
     const msg = JSON.parse(message.value)
     console.log(msg);
     
     consumer.on('message', (message) => {
      const topic = message.topic;
      const payload = message.value;
    
      // Browse the sockets of the agents corresponding to the topic
      for (const [agentId, agentSocket] of agentSockets.entries()) {
        if (agentSocket.topic === topic) {
          agentSocket.emit('redirection', payload);
          break;
        }
      }
    });
     
    },
  });
};

consume().catch(console.error);

server.listen(3002, () => {
  console.log('HTTPS server started on port 443');
});