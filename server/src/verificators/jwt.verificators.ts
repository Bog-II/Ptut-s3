import jwt from 'jsonwebtoken';

export const authJWT = (req, res, next) => {
  const token = req.header('access_token');
  if (!token) {
    return res.status(401).send('Access denied. No token provided.');
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET_TOKEN);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send('Invalid token.');
  }
};
