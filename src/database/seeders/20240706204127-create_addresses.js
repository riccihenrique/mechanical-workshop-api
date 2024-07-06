'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('tb_addresses', [
        {
          id: 'f3e6a3b4-9b5f-4e0d-8a0f-3c4b5d4f0f9e',
          mechanicalWorkshopId: '76dd272a-2bc0-4a0a-8584-cec84f2e5e3e',
          street: 'Rua Exemplo 1',
          city: 'São Paulo',
          state: 'SP',
          zip: '01000-000',
        },
        {
          id: 'f3e6a3b4-9b5f-4e0d-8a0f-3c4b5d4f0f9f',
          mechanicalWorkshopId: '0de7a26c-f18c-4a7e-884a-1280471426b3',
          street: 'Rua Exemplo 2',
          city: 'São Paulo',
          state: 'SP',
          zip: '04100-000',
        }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tb_addresses', null, {});
  }
};
