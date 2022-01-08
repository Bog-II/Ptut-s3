import { Request, Response } from 'express';

import {
  createUserDB,
  getAllUsersFromDB,
  getUserById,
  updateUserById,
} from '../models/users.model';

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

export const createUser = (req: Request, res: Response) => {
  const { userName, password, email } = req.body;

  const userToVerify = { userName: userName, password: password, email: email };
  if (!isUserValid(userToVerify)) {
    return res.status(400).send('Invalid fields');
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

  updateUserById(userId, userProperties, (err, user) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(user);
    }
  });
};
