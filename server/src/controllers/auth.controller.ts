import { Request, Response } from 'express';
import User from '../schemas/User';
import { comparePasswords, getHashedPassword } from '../utils/password.util';

import jwt from 'jsonwebtoken';

export const loginUser = async (req: Request, res: Response) => {
  const { emailOrUsername, password } = req.body;

  let user = await User.findOne({ email: emailOrUsername });
  if (user === null) {
    user = await User.findOne({ userName: emailOrUsername });
  }

  // email and username are invalid
  if (user == null) {
    return res.status(401).json({
      message: 'Wrong email or username',
    });
  }

  const isPasswordValid = await comparePasswords(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).json({
      message: 'Wrong password',
    });
  }

  // Create jwt token
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET_TOKEN);
  res.header('access_token', token);

  // Send jwt token
  res.status(200).send({ token: token });
};
