const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const lab = sequelize.define('lab', {
        project: { type: DataTypes.STRING},
        // language: {type: DataTypes.STRING},
        // subject: { type: DataTypes.STRING },
        tags: { type: DataTypes.STRING },
        category: { type: DataTypes.STRING },
        image: { type: DataTypes.STRING },
        version: { type: DataTypes.STRING },
    })
    return lab;
}
