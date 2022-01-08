import User from '../schemas/User';
import { v4 as uuidv4 } from 'uuid';

export const getAllUsersFromDB = (
  callback: (err: Error | null, res: any) => void
) => {
  User.find({}, (errQuery, users) => {
    if (errQuery) {
      callback(errQuery, []);
    } else {
      callback(null, users);
    }
  });
};

export const createUserDB = (
  userName: string,
  password: string,
  email: string,
  callback: (err: Error | null, res: any) => void
) => {

  

  const user = {
    _id: uuidv4(),
    userName: userName,
    password: password,
    email: email,
  };

  User.create(user, (errQuery, user) => {
    if (errQuery) {
      callback(errQuery, null);
    } else {
      callback(null, user);
    }
  });
};

export const getUserById = (
  userId: string,
  callback: (err: Error | null, res: any) => void
) => {
  User.findOne({ _id: userId }, (errQuery, user) => {
    if (errQuery) {
      callback(errQuery, null);
    } else {
      callback(null, user);
    }
  });
};

export const updateUserById = (
  userId: string,
  userProperties: Object,
  callback: (err: Error | null) => void
) => {
  User.findByIdAndUpdate(userId, userProperties, (errQuery) => {
    if (errQuery) {
      callback(errQuery);
    } else {
      callback(null);
    }
  });
};

export const deleteUserById = (
  userId: string,
  callback: (err: Error | null) => void
) => {
  User.findByIdAndRemove(userId, (err, user) => {
    if (err) {
      callback(err);
    } else {
      callback(null);
    }
  });
};
