"use strict";

module.exports = (User) => async (req, res, next) => {
  let data = await User.findOne({ where: { userName: req.body.userName } });
  if (!data) {
    req.user = await User.create(req.body);
    next();
  } else {
    next("this user name is not Valid");
  }
};
