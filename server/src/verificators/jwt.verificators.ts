import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { isUserIdExisting } from './user.verificators';

export type JWT_TOKEN = {
  _id: string;
};

export interface RequestWithId extends Request {
  id: string;
}

export const authJWT = (req: Request, res: Response, next: NextFunction) => {
  const jwt_token = <string>req.cookies['access_token'];

  if (!jwt_token) {
    return res.status(401).send('Access denied. No jwt token provided.');
  }

  try {
    const verified = jwt.verify(jwt_token, process.env.JWT_SECRET_TOKEN);
    console.log(verified);

    const id: string = (<JWT_TOKEN>verified)._id;

    if (id == null || !isUserIdExisting(id)) {
      return res.status(400).send('Invalid jwt token.');
    }

    req.params.id = id;
    next();
  } catch (err) {
    res.status(400).send('Invalid token.');
  }
};
