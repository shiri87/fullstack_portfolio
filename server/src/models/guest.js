const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const guest = sequelize.define('guest', {
        nickname: { type: DataTypes.STRING},
        date: { type: DataTypes.STRING },
        msg: { type: DataTypes.STRING },
        image: { type: DataTypes.STRING },
        
    })
    return guest;
}
