'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CompetidoresDisciplinas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      competidorId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Competidores',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      disciplinaId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Disciplinas',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('CompetidoresDisciplinas');
  },
};

