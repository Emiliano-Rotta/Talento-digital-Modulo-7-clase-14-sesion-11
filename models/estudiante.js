module.exports = (sequelize, DataTypes) => {
  const Estudiante = sequelize.define('Estudiante', {
    nombre: DataTypes.STRING,
    email: DataTypes.STRING,
  });

  Estudiante.associate = function (models) {
    Estudiante.belongsToMany(models.Curso, {
      through: 'EstudiantesCursos',
      foreignKey: 'estudianteId',
    });
  };

  return Estudiante;
};

