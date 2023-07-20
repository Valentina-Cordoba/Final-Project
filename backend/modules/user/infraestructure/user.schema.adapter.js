const UserSchema = require('./user.schema');

const RoleSchemaAdapter = {
  creteUser: function () {
    UserSchema.create()
  }
};

module.exports = RoleSchemaAdapter;
