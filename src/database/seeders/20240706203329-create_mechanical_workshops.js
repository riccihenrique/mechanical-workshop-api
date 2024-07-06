'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('tb_mechanical_workshops', [
        {
            id: '76dd272a-2bc0-4a0a-8584-cec84f2e5e3e',
            name: 'Oficina do Zé',
        },
        {
          id: '0de7a26c-f18c-4a7e-884a-1280471426b3',
          name: 'Oficina do João',
        }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tb_mechanical_workshops', null, {});
  }
};
