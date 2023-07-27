const UserService = require('../../domain/user.service');
const UserSchemaAdapter = require('../../infraestructure/user.schema.adapter');

class CreateUser {
  constructor() {}
  async createUserUseCase(body) {
    try {
      const userService = new UserService();
      const createUser = await UserSchemaAdapter.createUser(
        userService.adjustText(body.first_name),
        userService.adjustText(body.last_name),
        body.dni,
        new Date(body.birth_date),
        body.phone,
        body.role_id,
        userService.adjustText(body.email),
        body.password,
        body.user_name,
        body.client_id
      );
      return createUser;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = CreateUser;
