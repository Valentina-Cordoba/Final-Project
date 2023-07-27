const express = require('express');
const mongoose = require('mongoose');
const mainModule = require('./module');

const app = express();
const port = 3000;

app.use(express.json());

// Permite las peticiones del frontend 'http://127.0.0.1:5500'
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

mongoose.connect('mongodb://localhost:27017/movies', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Conexión exitosa a MongoDB');
    mainModule.startApp(app); 
  })
  .catch((error) => {
    console.error('Error al conectar a MongoDB:', error);
  });

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
