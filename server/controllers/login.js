import models from '../models';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const User = models.user;

const auth = {
  async login (req, res) {
    const username = req.body.username;
    const textPassword = req.body.password;
    const member = await User.findOne({ where: { username } });
    const result = bcrypt.compareSync(textPassword, member.password);
    if (member) {
      if (!result) {
        return res.status(401).send({ message: 'Invalid credentials try again' });
      }
      const token = jwt.sign({ email: member.email }, 'AFSFFDEFW121', {
        expiresIn: 86400 // expires in 24 hours
      });
      const user = { username: member.username, phone: member.phone, email: member.email };
      return res.status(200).send({ token: token, user, message: 'Login successful!' });
    }
    return res.status(500).send({ message: 'The user does not exist' });
  },
};
export default auth;
