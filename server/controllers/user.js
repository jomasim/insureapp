import models from '../models';
import bcrypt from 'bcrypt';

const User = models.user;

const user = {
  async create (req, res) {
    const hashedPassword = await bcrypt.hashSync(req.body.password, 12);
    return User
      .create({
        username: req.body.username,
        email: req.body.email,
        phone: req.body.phone,
        password: hashedPassword,
      })
      .then(user => {
        const member = { username: user.username, email: user.email, phone: user.phone };
        return res.status(201).send({ user: member, message: 'Registration successful!' });
      }).catch(error => res.status(400).send(error));
  },
};
export default user;
