import models from '../models';
import bcrypt from 'bcrypt';

const User = models.user;

const user = {
  create (req, res) {
    const hashedPassword = bcrypt.hashSync(req.body.password, 12);
    return User
      .create({
        username: req.body.username,
        email: req.body.email,
        phone: req.body.email,
        password: hashedPassword,
      })
      .then(todo => res.status(201).send(todo))
      .catch(error => res.status(400).send(error));
  },
};
export default user;
