'use strict';

const base64 = require('base-64');

module.exports = (User) => async (req, res, next) => {
    let Credintials  =  req.headers.authorization;
    if(!Credintials ){
        next('invalid Login');
        return;
    }
    //basic ougrheiupf
    let encodedCredintials = Credintials.split(' ').pop();
    let decodedCredintials = base64.decode(encodedCredintials);
    let [userName, password] = decodedCredintials.split(':');

    User.authenticateBasic(userName, password)
    .then((user) => {
        req.user = user;
        next();
    })
    .catch((err) => {
        next('Invalid Login');
    })
}