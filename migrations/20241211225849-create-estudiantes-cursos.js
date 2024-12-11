'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('EstudiantesCursos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      estudianteId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Estudiantes',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      cursoId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Cursos',
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

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('EstudiantesCursos');
  }
};
