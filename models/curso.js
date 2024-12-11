module.exports = (sequelize, DataTypes) => {
  const Curso = sequelize.define('Curso', {
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
  });

  Curso.associate = function (models) {
    Curso.belongsToMany(models.Estudiante, {
      through: 'EstudiantesCursos',
      foreignKey: 'cursoId',
    });
  };

  return Curso;
};
