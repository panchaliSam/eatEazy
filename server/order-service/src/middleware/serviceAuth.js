const { SERVICE_API_KEY } = require('../config/env');
module.exports = (req, res, next) => {
    const auth = req.header('Authorization') || '';
    const token = auth.split(' ')[1] || '';
  
    if (token !== SERVICE_API_KEY) {
      return res.status(401).json({ message: 'Unauthorized: invalid service key' });
    }
    next();
  };