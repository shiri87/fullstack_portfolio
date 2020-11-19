const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const LabProject = sequelize.define('LabProject', {
        project: { type: DataTypes.STRING},
        tags: { type: DataTypes.STRING },
        description: { type: DataTypes.STRING },
        category: { type: DataTypes.STRING },
        photo: { type: DataTypes.STRING },
        version: { type: DataTypes.STRING },
    })
    return LabProject;
}
