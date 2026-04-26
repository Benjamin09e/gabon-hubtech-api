require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./src/config/db');

const PORT = process.env.PORT || 5000;

// Connexion BDD puis démarrage serveur
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Serveur sur http://localhost:${PORT} 🚀`);
  });
});