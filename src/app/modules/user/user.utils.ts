import jwt, { JwtPayload } from "jsonwebtoken";

export const createToken = (
  jwtPayload: { name: string; email: string },
  secret: string,
  expiresIn: string
) => {
  return jwt.sign(jwtPayload, secret, {
    expiresIn,
  });
};

export const verifyToken = (token: string, secret: string) => {
  return jwt.verify(token, secret) as JwtPayload;
};
