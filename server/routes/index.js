import controllers from '../controllers';
import userSchema from '../middlewares/validateUser';
import validateLogin from '../middlewares/validateLogin';
import validate from 'express-validation';

const userController = controllers.user;
const authController = controllers.auth;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the insure API!',
  }));

  app.post('/api/users', validate(userSchema), userController.create);
  app.post('/api/auth', validate(validateLogin), authController.login);
};
