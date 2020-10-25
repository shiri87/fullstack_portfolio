// module.exports = {
//     register(req, res) {
//       res.send({
//         message: `Hello ${req.body.email} you have registered in!`,
//       })
//     },
//   }

const { DataTypes } = require("sequelize")
 
module.exports = (sequelize, Sequelize) =>
  sequelize.define("User", {
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
    },
  })
