'use strict';

 //Development:
module.exports = {
  db_connection: {
    username: "root",
    password: "123",
    database: "express2020",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  facebook: {
    clientID:  'APP_ID',
    clientSecret: 'APP_SECRET',
    callbackURL: '/api/auth/facebook/callback'
  },
  api_version:"1.0.0",
  api_developer:"SD"
};
