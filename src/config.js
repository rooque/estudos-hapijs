export const configFile = require("../config.json");

export default () => {
  global.__DEV__ = process.env.PROD ? false : true;
  process.env.APP_TOKEN = process.env.PROD
    ? configFile.prod.token
    : configFile.dev.token;
  process.env.APP_VER = configFile.ver;
};
