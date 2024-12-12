module.exports = (sequelize, DataTypes) => {
  const Disciplina = sequelize.define('Disciplina', {
    nombre: DataTypes.STRING,
    categoria: DataTypes.STRING,
  });

  Disciplina.associate = function (models) {
    Disciplina.belongsToMany(models.Competidor, {
      through: 'CompetidoresDisciplinas',
      foreignKey: 'disciplinaId',
    });
  };

  return Disciplina;
};
