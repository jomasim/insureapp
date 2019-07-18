import models from '../models';
import jwt from 'jsonwebtoken';

const User = models.user;

const auth = {
  async login (req, res) {
    const username = req.body.username;
    const member = await User.findOne({ where: { username } });
    if (member) {
      const token = jwt.sign({ email: member.email }, 'AFSFFDEFW121', {
        expiresIn: 86400 // expires in 24 hours
      });
      const user = { username: member.username, phone: member.phone, email: member.email };
      res.status(200).send({ token: token, user, message: 'Login was successful!' });
    }
    return res.status(500).send({ message: 'The user does not exist' });
  },
};
export default auth;
