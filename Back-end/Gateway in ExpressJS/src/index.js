
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const PORT = process.env.PORT || 3001;

const app = express();


// kafkaProducerMiddleware.js

const { Kafka } = require('kafkajs');
const kafkaConfig = require('./kafkaConfig');

const kafka = new Kafka({
  clientId: kafkaConfig.clientId,
  brokers: kafkaConfig.brokers,
});

const producer = kafka.producer();

async function initProducer() {
  await producer.connect();
}

function sendToKafka(topic, message) {
  return producer.send({
    topic,
    messages: [
      { value: JSON.stringify(message) },
    ],
  });
}

// Routes



// app.post('/register', async (req, res, next) => {
//     // Get the user information from the request body
//     const user = req.body;


//     try {
//       const kafkaMessage = {
//         user,
//         //message: JSON.stringify(user),
//         //data: 'Registration data',
//       };
    

//     // Send the message to Kafka
//     // registrationTopic is the Topic implemented for the Account Manager
//     await sendToKafka(registrationTopic, kafkaMessage);

//     // Continue with the request handling
//     next();
//   } catch (error) {
//     console.error('Error sending to Kafka:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });


    // // Forward the user information to the account manager
    // fetch('/api/account/register', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(user)
    // })
    // .then((response) => {
    //   // Check if the account manager returned a token
    //   if (response.ok) {
    //     // Return the token to the user in the response
    //     res.json(response.json());
    //   } else {
    //     // Return an error message if the account manager failed to generate a token
    //     res.status(400).json({ error: 'Failed to generate token' });
    //   }
    // })
    // .catch((error) => {
    //   // Return an error message if there was an error while forwarding the request to the account manager
    //   res.status(500).json({ error: 'Error forwarding request to account manager' });
    // });


function handlePostRequest(endpoint){
  // Handle the POST request to the specified endpoint
  app.post(`/${endpoint}`, async (req, res) => {
    // Get the user information from the request body
    const user = req.body;

    try {
      const kafkaMessage = {
        user,
        //message: JSON.stringify(user),
        //data: 'Registration data',
      };
    

    // Send the message to Kafka
    // LoginTopic is the Topic implemented for the Account Manager
    await sendToKafka(LoginTopic, kafkaMessage);

  
  } catch (error) {
    console.error('Error sending to Kafka:', error);
    res.status(500).send('Internal Server Error');
  }
});
}

function handleGetRequest(endpoint) {
  // Handle the GET request to the specified endpoint
  app.get(`/${endpoint}`, async (req, res) => {
    try {
      // the function fetchDataFromKafka to fetch data that was put by the endpoint to Kafka
      const kafkaData = await fetchDataFromKafka(endpoint);

      // Combine data from Kafka and the backend
      const responseData = {
        kafkaData,
      };

      // Send the combined data to the front end
      res.json(responseData);
    } catch (error) {
      console.error('Error handling GET request:', error);
      res.status(500).send('Internal Server Error');
    }
  });
}



   
//     // Forward the user information to the account manager
//     fetch('/api/account/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(user)
//     })
//     .then((response) => {
//       // Check if the account manager returned a token
//       if (response.ok) {
//         // Return the token to the user in the response
//         res.json(response.json());
//       } else {
//         // Return an error message if the account manager failed to generate a token
//         res.status(400).json({ error: 'Failed to generate token' });
//       }
//     })
//     .catch((error) => {
//       // Return an error message if there was an error while forwarding the request to the account manager
//       res.status(500).json({ error: 'Error forwarding request to account manager' });
//     });
// });


  

app.get('/logout', (req, res) => {
  req.logout();
  res.json({ message: 'User logged out with success' });
});

app.get('/profile', (req, res) => {
  if (req.isAuthenticated()) {
    res.json(req.user);
  } else {
    res.status(401).json({ message: 'Non authentifié' });
  }
});

// pour la facturation
// app.post('/payment', (req, res) => {
// // Get the payment information from the request body
// const payment = req.body;

// // Forward the payment information to the payment manager
// fetch('/api/payment/process', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(payment)
// })
// .then((response) => {
//   // Check if the payment manager returned a response
//   if (response.ok) {
//     // Return the response from the payment manager in the response
//     res.json(response.json());
//   } else {
//     // Return an error message if the payment manager failed to process the payment
//     res.status(400).json({ error: 'Failed to process payment' });
//   }
// })
// .catch((error) => {
//   // Return an error message if there was an error while forwarding the request to the payment manager
//   res.status(500).json({ error: 'Error forwarding request to payment manager', error });
// });
// });


app.listen(PORT, () => {
  console.log('Serveur en cours d\'exécution sur le port ' + PORT);
});