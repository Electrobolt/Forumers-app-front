//const express = require ('express');
//const app = express ()

//app.listen(3000) 

const kafka = require('kafka-node');
const io = require('socket.io')();

const kafkaClient = new kafka.KafkaClient({ kafkaHost: 'localhost:9092' }); 

const kafkaConsumer = new kafka.Consumer(
  kafkaClient,
  [{ topic: 'gateway_socket' }], 
  { autoCommit: true }
);

const userSockets = new Map();


// gérer les retour des services backend pour les sockets des utilisateurs
kafkaConsumer.on('message', (kafkaMessage) => {
  const message = kafkaMessage.value;

  const userId = message.userId;
  const userSocket = userSockets.get(userId);

  if (userSocket) {
    userSocket.emit('reponse', message);
  }
});


io.on('connection', (socket) => {
  console.log('Nouvelle connexion');

  socket.on('configuration_set', (data) => {
    const data_parse = JSON.parse(data);
    console.log(`votre configuration: ${data_parse}`);

    // configurer la socket dans la map
    const userId = data_parse.message;
    userSockets.set(userId, socket);

    // notifier au client de la prise en charge de son message
    socket.emit('effectuer', `Configuration réussite !!! `);
  });

  // Recevoir des messages du client
  socket.on('compte', (message) => {
    console.log(`Message reçu: ${message}`);

    // envoie bus d'évement pour le service gestion de compte

    // notifier au client de la prise en charge de son message
    socket.emit('en_cour', `Opération en cour de traitement: ${message}`);
  });

  socket.on('facturation', (message) => {
    console.log(`Message reçu: ${message}`);

    // envoie bus d'évement pour le service gestion de compte

    // notifier au client de la prise en charge de son message
    socket.emit('en_cour', `Opération en cour de traitement: ${message}`);
  });

  // Gérer la fermeture de la connexion
  socket.on('disconnect', () => {
    console.log('Connexion Socket.IO fermée');
  });
});

// Démarrer le serveur Socket.IO
const PORT = process.env.PORT || 3000;
io.listen(PORT);

console.log(`Serveur web socket en cours d'exécution sur le port ${PORT}`);
