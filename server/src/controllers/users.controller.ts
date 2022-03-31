import { CookieOptions, Request, Response } from 'express';

import {
  createUserDB,
  deleteUserById,
  getAllUsersFromDB,
  getUserById,
  updateUserById,
} from '../models/users.model';
import { RequestWithUserId } from '../verificators/jwt.verificators';

import {
  isEmailExisting,
  isEmailValid,
  isPasswordValid,
  isUsernameExisting,
  isUsernameValid,
  isUserValid,
} from '../verificators/user.verificators';
import { logoutUser } from './auth.controller';

export const getAllUsers = (req: Request, res: Response) => {
  getAllUsersFromDB((err, users) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(users);
    }
  });
};

export const createUser = async (req: Request, res: Response) => {
  const { username, password, email } = req.body;

  const userToVerify = { username: username, password: password, email: email };

  const arePropertiesValid = await isUserValid(userToVerify);
  if (!arePropertiesValid) {
    return res.status(400).send('Email or Username already exists');
  }

  createUserDB(username, password, email, (err, user) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(user);
    }
  });
};

export const updateMe = (req: RequestWithUserId, res: Response) => {
  const id = req.userId;
  const { username, email } = req.body;
  console.log(username, email);

  if (!isUsernameValid(username)) {
    return res.status(400).send('Invalid UserName');
  }

  if (!isEmailValid(email)) {
    return res.status(400).send('Invalid Email');
  }

  const promiseUsername = isUsernameExisting(username);
  const promiseEmail = isEmailExisting(email);

  Promise.all([promiseUsername, promiseEmail])
    .then(([usernameExist, emailExist]) => {
      const userProperties: { username?: string; email?: string } = {};

      if (!usernameExist) {
        userProperties.username = username;
      }

      if (!emailExist) {
        userProperties.email = email;
      }

      updateUserById(id, userProperties, (err) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(200).send(userProperties);
        }
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

export const deleteMe = (req: RequestWithUserId, res: Response) => {
  const id = req.userId;
  console.log(id);
  deleteUserById(id, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.clearCookie('access_token');
      res.status(200).send({ success: true });
    }
  });
};

export const getMyInfo = (req: RequestWithUserId, res: Response) => {
  const id = req.userId;
  getUserById(id, (err, user) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(user);
    }
  });
};
