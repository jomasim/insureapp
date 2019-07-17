import controllers from '../controllers';
import userSchema from '../middlewares/validateUser';
import validate from 'express-validation';

const userController = controllers.user;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the insure API!',
  }));

  app.post('/api/users', validate(userSchema), userController.create);
};
