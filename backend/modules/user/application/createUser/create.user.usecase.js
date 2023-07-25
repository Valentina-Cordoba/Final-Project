const UserSchemaAdapter = require('../../infraestructure/user.schema.adapter');

class CreateUser {
  constructor() {}
  async createUserUseCase(body) {
    const createUser = await UserSchemaAdapter.createUser(
      body.first_name,
      body.last_name,
      body.dni,
      new Date(body.birth_date),
      body.phone,
      body.role_id,
      body.email,
      body.password,
      body.user_name,
      body.client_id
    );
    return createUser;
  }
}

module.exports = CreateUser;
