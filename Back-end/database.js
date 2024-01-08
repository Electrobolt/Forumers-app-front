const mysql = require ('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'nr_database',
    user: 'root',
    password: '$2y$10$ZPIYbCwnp32U4tozUoCpKeFSReloAFPm1xPd7y9kZbVLKRuWDyFki'
});

connection.connect((err)=>{
    console.log('conneté à la BD')
    if (err){
        console.error('Erreu de connection : ', err.stack);
    }
})

connection.end((err) => {
    
    console.log('Connexion à la base de données fermée');

    if (err) {
      console.error('Erreur lors de la fermeture de la connexion : ' + err.stack);
    }
  
  });