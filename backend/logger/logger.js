const moment = require('moment')

const loggerAPI = (req, res, next) => {
  console.log(
    "REQUEST : " +
      `${req.method} ${req.protocol}://${req.get("host")}${
        req.originalUrl
      } AT ${moment().format('DD/MM/YYYY, h:mm:ss a')} `
  );
  next();
};

module.exports = {loggerAPI} ;