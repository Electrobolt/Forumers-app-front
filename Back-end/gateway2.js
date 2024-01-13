const express = require('express');
// const { KafkaClient, Consumer } = require('kafka-node');

const app = express();
const port = process.env.PORT || 9092;


// Middleware pour gérer les requêtes entrantes
const extractSubdomain = (req, res, next) =>{
  
  const hostParts = req.rawHeaders[1].split('.');
  
  if (hostParts.length === 2) {
    const subdomain = hostParts[0].toLowerCase();
    req.subdomain = (subdomain !== 'www') ? subdomain : null;
  } else if (hostParts.length <= 4 && hostParts[0].toLowerCase() === 'www') {
    req.subdomain = hostParts[1].toLowerCase(); 
  } else {
    req.subdomain = null; 
  }

  // on peut faire l'appel à kafka et transférer l'info au service TLS
  // à la place de next on peut renvoyer une réponse 
  // fin du reverse
  next();
};

app.use(extractSubdomain);


// Démarrer le serveur Express
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
