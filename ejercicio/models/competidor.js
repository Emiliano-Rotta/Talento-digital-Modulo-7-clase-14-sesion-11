module.exports = (sequelize, DataTypes) => {
  const Competidor = sequelize.define('Competidor', {
    nombre: DataTypes.STRING,
    edad: DataTypes.INTEGER,
    pais: DataTypes.STRING,
  });

  Competidor.associate = function (models) {
    Competidor.belongsToMany(models.Disciplina, {
      through: 'CompetidoresDisciplinas',
      foreignKey: 'competidorId',
    });
  };

  return Competidor;
};
