import { Request, Response } from 'express';
import User from '../schemas/User';
import { getHashedPassword } from '../utils/password.util';
import bcrypt from 'bcryptjs';

export const loginUser = async (req: Request, res: Response) => {
  const { emailOrUsername, password } = req.body;

  let user = await User.findOne({ email: emailOrUsername });
  if (user == null) {
    user = await User.findOne({ userName: emailOrUsername });
  }

  // email and username are invalid
  if (user == null) {
    return res.status(401).json({
      message: 'Wrong email or username',
    });
  }

  const hashPassword = await getHashedPassword(user.password);
  const isPasswordValid = await bcrypt.compare(password, hashPassword);

  if (!isPasswordValid) {
    return res.status(401).json({
      message: 'Wrong password',
    });
  }

  res.send('Logged In');
};
