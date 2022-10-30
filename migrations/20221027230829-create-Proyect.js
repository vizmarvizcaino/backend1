'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('proyects', {
      // Define attributes
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING
      },
      priority: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      createdOn: {
        type: Sequelize.DATE,
        field: 'created_on',
        defaultValue: Sequelize.NOW
      }
    });
   
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('proyects');
  }
};
