import { CookieOptions, Request, Response } from 'express';
import User from '../schemas/User';
import { comparePasswords } from '../utils/password.util';

import jwt from 'jsonwebtoken';
import {
  isEmailExisting,
  isUserIdExisting,
  isUsernameExisting,
} from '../verificators/user.verificators';
import { JWT_TOKEN } from '../verificators/jwt.verificators';

export const loginUser = (req: Request, res: Response) => {
  const { email, username, password } = req.body;

  if (password == undefined) {
    return res.status(400).send('Password is required');
  }

  if (email == undefined && username == undefined) {
    return res.status(400).send('Email or Username is required');
  }

  const promiseUsername = isUsernameExisting(username);
  const promiseEmail = isEmailExisting(email);

  Promise.all([promiseUsername, promiseEmail])
    .then(async ([usernameExist, emailExist]) => {
      let user;
      if (usernameExist) {
        user = await User.findOne({ username: username });
      } else {
        user = await User.findOne({ email: email });
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
    })
    .then()
    .catch((err) => {
      res.status(500).send(err);
    });
};

export const retrieveUserData = (req: Request, res: Response) => {
  const jwt_token = <string>req.cookies['access_token'];

  if (!jwt_token) {
    return res.status(401).send('Access denied. No jwt token provided.');
  }

  try {
    const verified = jwt.verify(jwt_token, process.env.JWT_SECRET_TOKEN);
    const id: string = (<JWT_TOKEN>verified)._id;

    if (id == null || !isUserIdExisting(id)) {
      return res.status(400).send('Invalid jwt token.');
    }

    res.status(200).send({ success: true });
  } catch (err) {
    res.status(400).send('Invalid token.');
  }
};

export const logoutUser = (req: Request, res: Response) => {
  res.clearCookie('access_token');
  res.status(200).send({ success: true });
};
