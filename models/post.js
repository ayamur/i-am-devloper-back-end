'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Post.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Untitled',
      comment: 'The title of the image post'
  },
    profileId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Profiles',
        key: 'id',
      },
    },
    reactorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Profiles',
        key: 'id',
      }
    },
    imageUrl: { 
      type: DataTypes.STRING,
      allowNull: false,
      }
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};