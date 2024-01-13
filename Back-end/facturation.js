const { username,email, paiement, numero, choix_plan, montant } = require('./facturationConsumer.js');



//Code pour recevoir un paiment
const {PaymentOperation, RandomGenerator} = require('@hachther/mesomb');

const payment = new PaymentOperation({applicationKey: '95addec89c992f672a0432d5afdf86b71eb33c0a', accessKey: '8da82280-e82d-4abb-9eb5-0b62aba18cef', secretKey: '0a8e0d40-b742-400a-b0bd-e3754452fe76'});
const response = await payment.makeCollect({amount: montant, service: paiement, payer: numero, nonce: RandomGenerator.nonce()});
console.log(response.isOperationSuccess());
console.log(response.isTransactionSuccess());


// code pour retirer de l'argent
/* const {PaymentOperation, RandomGenerator} = require('@hachther/mesomb');

const payment = new PaymentOperation({applicationKey: '95addec89c992f672a0432d5afdf86b71eb33c0a', accessKey: '8da82280-e82d-4abb-9eb5-0b62aba18cef', secretKey: '0a8e0d40-b742-400a-b0bd-e3754452fe76'});
const response = await payment.makeDeposit({amount: 100, service: 'MTN', receiver: '677550203', nonce: RandomGenerator.nonce()});
console.log(response.isOperationSuccess());
console.log(response.isTransactionSuccess()); */