const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'Access Denied' });

  try {
    // Hardcoded secret instead of process.env.JWT_SECRET
    const decoded = jwt.verify(token, 'khubaibisgreat');
    req.user = decoded;
    next();
  } catch {
    return res.status(401).json({ message: 'Invalid Token' });
  }
};
