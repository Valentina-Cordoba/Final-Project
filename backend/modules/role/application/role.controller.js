// En el controlador de Express (app.js o server.js, por ejemplo)
const ReadRole = require('./readRole/read.role.usecase');

class RoleController {
  constructor() {}
  async getAllRoles(req, res) {
    try {
      const readRole = new ReadRole();
      const roles = await readRole.getRolesUseCase();
      res.json(roles);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los roles' });
    }
  }
}

module.exports = RoleController;
