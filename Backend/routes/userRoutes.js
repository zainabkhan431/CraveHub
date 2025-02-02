const express = require('express');
const {registerUser, loginUser, registerGuest,getUsers } = require('../controllers/userController');
const router = express.Router();

router.post('/signup', registerUser);
router.post('/login', loginUser);
router.post('/guest', registerGuest);
router.get('/all', getUsers);

module.exports = router;
