'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('tb_addresses', { 
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
       street: {
        type: Sequelize.STRING,
        allowNull: false,
       },
       city: {
        type: Sequelize.STRING,
        allowNull: false,
       },
       state: {
        type: Sequelize.STRING,
        allowNull: false,
       },
       zip: {
        type: Sequelize.STRING,
        allowNull: false,
       },
      latitude: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      longitude: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('now'),
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('tb_addresses');
  }
};
