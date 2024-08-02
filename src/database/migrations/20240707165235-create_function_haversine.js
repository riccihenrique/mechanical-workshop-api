'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      CREATE FUNCTION haversine(
              lat1 FLOAT, lon1 FLOAT,
              lat2 FLOAT, lon2 FLOAT
          ) RETURNS FLOAT
      BEGIN
          RETURN DEGREES(ACOS(
                    COS(RADIANS(lat1)) *
                    COS(RADIANS(lat2)) *
                    COS(RADIANS(lon2) - RADIANS(lon1)) +
                    SIN(RADIANS(lat1)) * SIN(RADIANS(lat2))
                  )) * 111.045; // 111.045 km = Earth's radius
      END
    `); // Adaptado de https://www.plumislandmedia.net/mysql/stored-function-haversine-distance-computation/
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.sequelize.query('DROP FUNCTION haversine');

  }
};
