import models from '../models';

const User = models.user;

const user = {
  create (req, res) {
    return User
      .create({
        username: req.body.username,
        email: req.body.email,
        phone: req.body.email,
        password: req.body.password,
      })
      .then(todo => res.status(201).send(todo))
      .catch(error => res.status(400).send(error));
  },
};
export default user;
