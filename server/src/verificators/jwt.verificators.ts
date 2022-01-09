import { Request } from 'express';
import jwt from 'jsonwebtoken';
import { isUserIdExisting } from './user.verificators';

export type JWT_TOKEN = {
  _id: string;
};

export interface RequestWithId extends Request {
  id: string;
}

export const authJWT = (req, res, next) => {
  const { jwt_token } = req.headers;

  if (jwt_token === null) {
    return res.status(401).send('Access denied. No jwt token provided.');
  }

  try {
    const verified = jwt.verify(
      <string>jwt_token,
      process.env.JWT_SECRET_TOKEN
    );
    console.log(verified);

    const id: string = (<JWT_TOKEN>verified)._id;

    if (id == null || !isUserIdExisting(id)) {
      return res.status(400).send('Invalid jwt token.');
    }

    req.id = id;
    next();
  } catch (err) {
    res.status(400).send('Invalid token.');
  }
};
