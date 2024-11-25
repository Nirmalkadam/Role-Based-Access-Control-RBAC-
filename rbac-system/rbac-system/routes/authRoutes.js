const express = require('express');
const { register, login } = require('../controllers/authController');
const { verifyToken, roleAuthorization } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

// Protected Routes Example
router.get('/admin-only', verifyToken, roleAuthorization(['Admin']), (req, res) => {
  res.send('Welcome, Admin!');
});

router.get('/moderator-only', verifyToken, roleAuthorization(['Moderator']), (req, res) => {
  res.send('Welcome, Moderator!');
});

module.exports = router;