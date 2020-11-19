const express = require('express');
const registerController = require('../controllers/registerController')
const GuestController = require('../controllers/GuestController')
const LabController = require('../controllers/LabController');
const RegisterControllerPolicies = require('../policies/RegisterControllerPolicies')
const router =  express.Router();

 
//routes
router.post('/register', registerController.register, RegisterControllerPolicies.register
)
router.post('/login',registerController.login)


router.get('/lab', LabController.getAllLabProjects)
router.post('/lab', LabController.postLabProject)
router.put('/lab', LabController.putLab)
router.delete('/lab', LabController.deleteLab)

router.get('/guest', GuestController.getAllGuestbooks)
router.post('/guest', GuestController.postGuestbook)
router.put('/guest', GuestController.putGuest)
router.delete('/guest', GuestController.deleteGuest)

module.exports = router
