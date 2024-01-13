const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'facturationProducer',
  brokers: ['localhost:9092']
});

const producer = kafka.producer();

async function sendProducerMessage (topic, message){
  const sendMessage = async () => {
    try {
      await producer.connect();
  
      await producer.send({
        topic: topic,
        messages: [{value: message}]
      });
  
      console.log('Message envoyé avec succès');
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message', error);
    } finally {
      await producer.disconnect();
    }
  };
  
  sendMessage().catch(console.error);
}

sendProducerMessage('Facturation', JSON.stringify({numero:'699887766', montant:50, service:'MOMO', socketId:'monpereet', email:'sbissog@gmail.com', choix_plan: 'premium', action:'payer'}))