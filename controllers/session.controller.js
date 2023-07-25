const sessionService = require("../services/session.service");

login = (req, res, next) => {
  return sessionService.loginUser(req, res, next);
};

module.exports = {
  login
};
