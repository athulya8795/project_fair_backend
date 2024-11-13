// import express 
const express = require('express')

// import userController
const userController = require('./controllers/userController')

// imort addController
const projectController = require('./controllers/projectController')

// import jwtmiddleware
const jwtmiddleware = require('./middleware/jwtMiddleware')

// import multer
const multerConfig = require('./middleware/multerMiddleware')

//instance router
const router = new express.Router()

//Register
router.post('/register', userController.register)

// login
router.post('/login', userController.login)

//add project
router.post('/add-project', jwtmiddleware, multerConfig.single("projectImage"), projectController.addProjectController)

//all project
router.get('/all-project', jwtmiddleware, projectController.getAllProjectController)

//home project
router.get('/home-project', projectController.getHomeProjectController)

//user project
router.get('/user-project', jwtmiddleware, projectController.getUserProjectController)

//remove user project
router.delete('/remove-userproject/:id',jwtmiddleware,projectController.removeUserProjectController)

//update user project
router.put('/update-userproject/:id',jwtmiddleware,multerConfig.single('projectImage'),projectController.updateUserProjectController)

//update user profile
router.put('/update-userprofile',jwtmiddleware,multerConfig.single('profile'),userController.editProfileController)

module.exports = router