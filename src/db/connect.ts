const mysql = require("mysql");
const config = require('../config');

// Note: if can't connect to remote DB in sqlyog, change the 
// access host ip address in hostgator since it's dynamic
// Go to Remote MySQL in hostgator
// Use `what's my ip` and replace it there

export const db = mysql.createPool(config.mysql);

// module.exports = db;
  