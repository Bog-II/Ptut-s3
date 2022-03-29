import { CookieOptions, Request, Response } from 'express';
import User from '../schemas/User';
import { comparePasswords, getHashedPassword } from '../utils/password.util';

import jwt from 'jsonwebtoken';

export const loginUser = async (req: Request, res: Response) => {
  const { email, username, password } = req.body;

  if (email == null && username == null) {
    return res.status(400).send('Email or Username is required');
  }

  let user;
  if (email != null) {
    user = await User.findOne({ email: email });
  } else {
    user = await User.findOne({ username: username });
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

  const cookieOptions: CookieOptions = {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  };

  res.cookie('access_token', token, cookieOptions);

  // Send jwt token
  res.status(200).send({ success: true });
};
