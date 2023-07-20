const RoleSchemaAdapter = require('../../infraestructure/role.schema.adapter');

class ReadRole {
  constructor() {
  }
  async getRolesUseCase() {
    const rolesData = await RoleSchemaAdapter.getRoles();
    return rolesData;
  }
}

module.exports = ReadRole;