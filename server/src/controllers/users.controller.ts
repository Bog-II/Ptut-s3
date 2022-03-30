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
  isEmailValid,
  isPasswordValid,
  isUsernameValid,
  isUserValid,
} from '../verificators/user.verificators';

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

export const updateUser = (req: Request, res: Response) => {
  const userId = req.params.id;
  const { username, password, email } = req.body;

  if (!isUsernameValid(username)) {
    return res.status(400).send('Invalid UserName');
  }

  if (!isPasswordValid(username)) {
    return res.status(400).send('Invalid Password');
  }

  if (!isEmailValid(username)) {
    return res.status(400).send('Invalid Email');
  }

  const userProperties = {
    username: username,
    password: password,
    email: email,
  };

  updateUserById(userId, userProperties, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send('User successfully updated');
    }
  });
};

export const deleteUser = (req: RequestWithUserId, res: Response) => {
  deleteUserById(req.userId, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send('User successfully deleted');
    }
  });
};

export const getMyInfo = (req: RequestWithUserId, res: Response) => {
  const id = req.userId;
  console.log('getMyInfo', id);

  getUserById(id, (err, user) => {
    if (err) {
      res.status(500).send(err);
    } else {
      console.log(user);
      res.status(200).send(user);
    }
  });
};
