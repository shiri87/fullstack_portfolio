const { DataTypes } = require("sequelize")
const bcrypt = require('bcrypt') 

async function hashPassword(user) {
  if(!user.changed('password')){
    return
  }
  console.log(user);
  try{
    const salt = await bcrypt.genSalt(10);
    //Hashes the password and salt
    const hashPasswordValue = await bcrypt.hash(user.password, salt);
    user.setDataValue('password', hashPasswordValue)
}
  catch(error){
    console.log('error :>> ', error);
  }
}


//module
// module.exports = (sequelize, Sequelize) =>{
module.exports = (sequelize, DataTypes) =>{
const User =  sequelize.define("User", {
    
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    hooks:{
      // beforeCreate: hashPassword,
      // beforeUpdate: hashPassword,
      beforeSave: hashPassword,
      
    }},
    )
    // decrpt
    User.prototype.comparePassword = async function(password){
      try {
        validPassword =  await bcrypt.compare(password, this.password);
        return validPassword;
      } catch (error) {
        console.log("wrong password")
      }
    } 
    return User;
  }