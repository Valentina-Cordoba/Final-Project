// Importar los módulos y componentes necesarios
const express = require('express');
const app = express();
const roleModule = require('./modules/role/role.module');
const clientModule = require('./modules/client/client.module');
const userModule = require('./modules/user/user.module');

// Configuración y coordinación de los módulos
function startApp() {
  roleModule.setup(app);
  clientModule.setup(app);
  userModule.setup(app);
}

module.exports = {
    startApp,
  };