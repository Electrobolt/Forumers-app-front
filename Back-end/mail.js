const { username,email, paiement, numero, choix_plan, montant } = require('./facturationConsumer.js');
var nodemailer = require('nodemailer');


//var message = username+' a souscris avec succès au forfait '+choix_plan+' valable un mois.';


function sendMail(to,message){

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ndassaamirah@gmail.com',
      pass: 'championne2003'
    }
  });
  var mailOptions = {
    from: 'ndassaamirah@gmail.com',
    to: to,
    subject: 'Paiement NGROK-PRIME',
    text: message
  };
 
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

module.exports = {
  email,
  sendMail
}