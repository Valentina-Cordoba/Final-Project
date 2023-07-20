const RoleServicePort = require('../domain/role.service.port');

class RoleService extends RoleServicePort  {
    toLowerCase(text) {
        return text.toLowerCase();
    }
  }
  
  module.exports = RoleService;
  