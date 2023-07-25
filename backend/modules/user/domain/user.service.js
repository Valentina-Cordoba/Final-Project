const UserServicePort = require('../domain/user.service.port');

class UserService extends UserServicePort {
  toLowerCase(text) {
    return text.toLowerCase();
  }
}

module.exports = UserService;
