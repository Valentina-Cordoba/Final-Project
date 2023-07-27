const UserServicePort = require('../domain/user.service.port');

class UserService extends UserServicePort {
  adjustText(text) {
    try {
      return text.toLowerCase().trim();
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = UserService;
