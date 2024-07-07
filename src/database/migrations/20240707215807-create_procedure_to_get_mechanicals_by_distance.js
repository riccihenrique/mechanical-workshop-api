'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.sequelize.query(`
            CREATE PROCEDURE get_mechanical_workshops_by_distance(IN lat FLOAT, IN lon FLOAT, IN distance FLOAT)
          BEGIN
            SELECT *, haversine(lat, lon, a.latitude, a.longitude) as distance FROM tb_mechanical_workshops mw INNER JOIN tb_addresses a ON mw.addressId = a.id WHERE haversine(lat, lon, a.latitude, a.longitude) <= distance;
          END`);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.sequelize.query('DROP PROCEDURE get_mechanical_workshops_by_distance;');
  }
};
