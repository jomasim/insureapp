import controllers from '../controllers';

const userController = controllers.user;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the insure API!',
  }));

  app.post('/api/users', userController.create);
};
