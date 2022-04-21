export const authConfig = {
  jwt: {
    secrect: process.env.TOKEN_SECRECT,
    expiresIn: process.env.EXPIRES_IN,
  },
};
