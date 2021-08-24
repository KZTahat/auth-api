"use strict";

module.exports = (User) => (req, res, next) => {
  let Credintials = req.headers.authorization;
  if (!Credintials) {
    next("Invalid Login");
    return;
  }
  let token = Credintials.split(" ").pop();
  User.authenticateBearer(token)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => next(`Invalid Login ${err}`));
};
