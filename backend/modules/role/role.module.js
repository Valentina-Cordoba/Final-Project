// role.module.js

const RoleSchema = require('./infraestructure/role.schema');
const RoleSchemaAdapter = require('./infraestructure/role.schema.adapter');

// Configuración y operaciones del módulo de Role
function setup() {
  RoleSchemaAdapter.initialize();
  }
  
  module.exports = {
    setup,
  };
  