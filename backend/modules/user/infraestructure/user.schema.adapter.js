const UserSchema = require('./user.schema');

const UserSchemaAdapter = {
  createUser: async function (
    first_name,
    last_name,
    dni,
    birth_date,
    phone,
    role_id,
    email,
    password,
    user_name,
    client_id
  ) {
    try {
      return await UserSchema.create({
        first_name: first_name,
        last_name: last_name,
        dni: dni,
        birth_date: birth_date,
        phone: phone,
        role_id: role_id,
        email: email,
        password: password,
        user_name: user_name,
        client_id: client_id,
      });
    } catch (error) {
      throw new Error(
        'Se ha presentado un error al crear el usuario: ' + error
      );
    }
  },
};

module.exports = UserSchemaAdapter;
