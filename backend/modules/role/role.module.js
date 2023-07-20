// role.module.js

const RoleController = require('./application/role.controller');
const RoleSchema = require('./infraestructure/role.schema');
const RoleSchemaAdapter = require('./infraestructure/role.schema.adapter');

// Configuración y operaciones del módulo de Role
function setup(app) {
  RoleSchemaAdapter.initialize();
  const roleController = new RoleController();
  app.get('/roles', roleController.getAllRoles.bind(roleController));
  }
  
  module.exports = {
    setup,
  };
  