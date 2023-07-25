// user.module.js

const UserSchema = require('./infraestructure/user.schema');
const UserSchemaAdapter = require('./infraestructure/user.schema.adapter');
const UserController = require('./application/user.controller');

// Configuración y operaciones del módulo de Usuario
function setup(app) {
  const userController = new UserController();
  app.post('/user', userController.createUserPost);
}

module.exports = {
  setup,
};
