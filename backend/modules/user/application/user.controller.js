// En el controlador de Express (app.js o server.js, por ejemplo)
const CreateUser = require('./createUser/create.user.usecase');

class UserController {
  constructor() {}
  async createUserPost(req, res) {
    try {
      const body = req.body;
      const createUser = new CreateUser();
      const user = await createUser.createUserUseCase(body);
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = UserController;
