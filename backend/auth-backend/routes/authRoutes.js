const router = require('express').Router();
const passport = require('passport');
const authController = require('../controllers/authController');

// Email/password
router.post('/register', authController.register);
router.post('/login', authController.login);

// Google login
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/auth/google/fail' }),
  authController.googleSuccess
);
router.get('/google/fail', authController.googleFail);

module.exports = router;