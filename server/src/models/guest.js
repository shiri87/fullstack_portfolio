const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const Guest = sequelize.define('Guest', {
        nickname: { type: DataTypes.STRING},
        date: { type: DataTypes.STRING },
        msg: { type: DataTypes.STRING },
        photo: { type: DataTypes.STRING },
        
    })
    return Guest;
}
