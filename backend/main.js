const express = require('express');
const mongoose = require('mongoose');
const mainModule = require('./module');

const app = express();
const port = 3000;

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
