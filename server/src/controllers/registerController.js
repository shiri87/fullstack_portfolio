
const {User} = require('../models')
const {Op} =require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')


function jwtSignUser(user) {
  //how long will take the token - one week
  const tokenExpiryTime = 60 * 60 * 24 * 7
  //payload, passport, expire date
  return jwt.sign(user, config.authentication.jwtSecret, {expiresIn: tokenExpiryTime })
}

module.exports = {
  async register(req, res) {
    try {
      console.log(req.body);
      const user = await User.create(req.body)
      const userJSON = user.toJSON()
      res.send({ user: userJSON, token: jwtSignUser(userJSON) });

    } catch (err) {
      res.status(400).send({
        // error: "this email account is already in use",
        error: err // real err console in postman
      })
    }
  },

  async login(req,res) {
    try {
      const {email, password} = req.body
      // find one data / matching request data from user
      const user = await User.findOne({
        where : {email : email}

      })
      //if there isn't database
      if(!user){
        res.status(401).send({
          error: "The login information wasn't correct",
        })
      }
      // const isPasswordValid = password === user.password
      const isPasswordValid = await user.comparePassword(password)
      if(!isPasswordValid){
        res.status(401).send({
            error:'The login information was incorrect'
          })   
      }
      else userJSON = user.toJSON();
      res.send({
        user:userJSON,
        token:jwtSignUser(userJSON)
      })
      }catch (err) {
      res.status(500).send({
        error: "your information wasn't correct. Try it again",
        //error: err // real err console in postman
      })
    }
  },
  
  }
  