import { Request, Response } from 'express';

import {
  createUserDB,
  deleteUserById,
  getAllUsersFromDB,
  getUserById,
  updateUserById,
} from '../models/users.model';
import { RequestWithId } from '../verificators/jwt.verificators';

import {
  isEmailValid,
  isPasswordValid,
  isUserNameValid,
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

// export const getUserAvatar = (req: Request, res: Response) => {
//   const userId = req.params.userId;
//   getUserById(userId, (err, user) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.status(200).send(user.avatar);
//     }
//   });
// }

export const createUser = async (req: Request, res: Response) => {
  const { userName, password, email } = req.body;

  const userToVerify = { userName: userName, password: password, email: email };

  const arePropertiesValid = await isUserValid(userToVerify);
  if (!arePropertiesValid) {
    return res.status(400).send('Email or Username already exists');
  }

  createUserDB(userName, password, email, (err, user) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(user);
    }
  });
};

export const updateUser = (req: Request, res: Response) => {
  const userId = req.params.id;
  const { userName, password, email } = req.body;

  if (!isUserNameValid(userName)) {
    return res.status(400).send('Invalid UserName');
  }

  if (!isPasswordValid(userName)) {
    return res.status(400).send('Invalid Password');
  }

  if (!isEmailValid(userName)) {
    return res.status(400).send('Invalid Email');
  }

  const userProperties = {
    userName: userName,
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

export const deleteUser = (req: RequestWithId, res: Response) => {
  deleteUserById(req.id, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send('User successfully deleted');
    }
  });
};