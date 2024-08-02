'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('tb_addresses', [
        {
          id: 'f3e6a3b4-9b5f-4e0d-8a0f-3c4b5d4f0f9e',
          street: 'Rua Exemplo 1',
          city: 'São Paulo',
          state: 'SP',
          zip: '01000-000',
          latitude: -23.422813354634926,
          longitude: -51.9235877758095
        },
        {
          id: 'f3e6a3b4-9b5f-4e0d-8a0f-3c4b5d4f0f9f',
          street: 'Rua Exemplo 2',
          city: 'São Paulo',
          state: 'SP',
          zip: '04100-000',
          latitude: -23.38595046735244,
          longitude: -51.943294893114675
        }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tb_addresses', null, {});
  }
};
