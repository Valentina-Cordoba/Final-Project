const RoleSchema = require('./role.schema');

const RoleSchemaAdapter = {
  initialize: function () {
    RoleSchema.deleteMany()
      .then(() => {
        const roles = [
          { name: 'empleado', description: 'Empleado' },
          { name: 'cliente', description: 'Cliente' },
          { name: 'administrador', description: 'Administrador' }
        ];
        RoleSchema.create(roles)
          .catch((error) => {
            console.error('Error al crear registros por defecto:', error);
          });
      })
      .catch((error) => {
        console.error('Error al eliminar registros existentes:', error);
      });
  },
  getRoles: function() {
    return RoleSchema.find()
  }
};

module.exports = RoleSchemaAdapter;
