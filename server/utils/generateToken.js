const jwt = require('jsonwebtoken');

const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET || 'maabagalamukhinalkhedasecretkey123456!', {
    expiresIn: process.env.JWT_EXPIRE || '30d'
  });
};

module.exports = generateToken;
