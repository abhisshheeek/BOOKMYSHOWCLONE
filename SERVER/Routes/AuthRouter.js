const { signup, login } = require('../Controllers/AuthController');
const { signupValidation, loginValidation } = require('../Middlewares/AuthValidation');

const router = require('express').Router();

router.post('/login', loginValidation, login);
router.post('/signup', signup); // Remove signupValidation temporarily
console.log("AuthRouter Loaded");


module.exports = router