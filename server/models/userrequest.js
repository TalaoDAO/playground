'use strict';
const {
  Model
} = require('sequelize');



module.exports = (sequelize, DataTypes) => {
  class UserRequest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserRequest.belongsTo(models.User,{ foreignKey: 'user_id', targetKey: 'id' });
    }
  }
  UserRequest.init({
    type: DataTypes.STRING,
    uuid: DataTypes.STRING,
    data: DataTypes.JSON,
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'UserRequest',
  });

  return UserRequest;
};