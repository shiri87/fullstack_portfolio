const express = require('express');
const registerController = require('../controllers/registerController')
const guestController = require('../controllers/guestController')
const labController = require('../controllers/labController');
const router =  express.Router();

 
//routes
router.post('/register', registerController.register)

router.get('/lab', labController.getLab)
router.post('/lab', labController.postLab)
router.put('/lab', labController.putLab)
router.delete('/lab', labController.deleteLab)

router.get('/guest', guestController.getGuest)
router.post('/guest', guestController.postGuest)
router.put('/guest', guestController.putGuest)
router.delete('/guest', guestController.deleteGuest)

module.exports = router
