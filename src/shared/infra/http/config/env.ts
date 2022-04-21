export const env = {
  port: process.env.PORT || 3333,
  algorithm: process.env.ALGORITHM || "aes-256-cbc",
  secrect: process.env.SECRECT || "dtmoney",
  type: process.env.TYPE || "hex",
};
