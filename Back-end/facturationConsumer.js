const {PaymentOperation, RandomGenerator} = require('@hachther/mesomb');

const mail = require('./mail')


const applicationKey = '95addec89c992f672a0432d5afdf86b71eb33c0a'
const accessKey = '8da82280-e82d-4abb-9eb5-0b62aba18cef' 
const secretKey =  '0a8e0d40-b742-400a-b0bd-e3754452fe76'



const { Kafka, Partitioners } = require('kafkajs');

const kafkaClient = new Kafka({
  clientId: 'facturationConsumer',
  brokers: ['localhost:9092'],
  createPartitioner: Partitioners.LegacyPartitioner
});

/* const producer = kafkaClient.producer();

// Code pour recevoir un paiement

const sendMessage = async (msg) => {
  await producer.connect();
  await producer.send({
    topic: 'Gateway1',
    messages: [{ value: msg}]
  });
  await producer.disconnect();
}; */

/* sendMessage().catch(console.error); */

// Code pour retirer de l'argent

async function deposerDeLargent(numeroPayeur, montant, service, applicationKey, accessKey, secretKey) {
  const payment = new PaymentOperation({ applicationKey: applicationKey, accessKey: accessKey, secretKey: secretKey });
  const response = await payment.makeCollect({ amount: montant, service: service, payer: numeroPayeur, nonce: RandomGenerator.nonce() });
  console.log(response.isOperationSuccess());
  console.log(response.isTransactionSuccess());
}

async function retirerDeLargent(numeroReceveur, montant, service, applicationKey, accessKey, secretKey) {
  const payment = new PaymentOperation({ applicationKey: applicationKey, accessKey: accessKey, secretKey: secretKey });
  const response = await payment.makeCollect({ amount: montant, service: service, payer: numeroReceveur, nonce: RandomGenerator.nonce() });
  console.log(response.isOperationSuccess());
  console.log(response.isTransactionSuccess());
}

const consumer = kafkaClient.consumer({ groupId: 'ngrokGroup' });
const consume = async () => {
  await consumer.connect();

  await consumer.subscribe({ topic: 'Facturation', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
     const msg = JSON.parse(message.value)
     console.log(msg);
     if (msg.action === 'payer') {
      deposerDeLargent(msg.numero,msg.montant,msg.service,applicationKey,accessKey,secretKey).then(()=>{
          sendMessage(JSON.stringify({socketId:msg.socketId,msg:'success',action:'reponse'}))
          var message ='Vous  avez souscris avec succès au forfait '+msg.choix_plan+' valable un mois.';
          mail.sendMail(msg.email,message)
          console.log("mail envoyé")
      }).catch((err)=>{
        sendMessage(JSON.stringify({socketId:msg.socketId,msg:'failed',action:'reponse'}))

      })
     }
    },
  });
};

consume().catch(console.error);