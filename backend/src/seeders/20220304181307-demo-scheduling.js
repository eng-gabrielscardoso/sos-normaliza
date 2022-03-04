"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Schedulings", [
      {
        id: 1,
        type: "PRESENCIAL",
        time_id: 1, // seg 9h30
        user_id: 1, //joao
        status: "PENDENTE",
        requester_name: "Lucas Silva",
        requester_email: "lucas@email.com",
        appointment_day: new Date(2022, 5, 9), // 09/05/2022 -> seg
        token: "4fe4",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Schedulings");
  },
};