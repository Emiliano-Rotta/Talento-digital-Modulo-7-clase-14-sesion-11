const { Competidor, Disciplina } = require('../models');

// Crear competidor
async function crearCompetidor(nombre, edad, pais) {
  return await Competidor.create({ nombre, edad, pais });
}

// Crear disciplina
async function crearDisciplina(nombre, categoria) {
  return await Disciplina.create({ nombre, categoria });
}

// Asociar competidor con disciplina
async function asociarCompetidorADisciplina(competidorId, disciplinaId) {
  const competidor = await Competidor.findByPk(competidorId);
  const disciplina = await Disciplina.findByPk(disciplinaId);
  if (competidor && disciplina) {
    await competidor.addDisciplina(disciplina);
    console.log(`Competidor asociado a disciplina exitosamente.`);
  }
}

// Obtener competidores con disciplinas
async function obtenerCompetidoresConDisciplinas() {
  return await Competidor.findAll({ include: Disciplina });
}

// Obtener disciplinas con competidores
async function obtenerDisciplinasConCompetidores() {
  return await Disciplina.findAll({ include: Competidor });
}

module.exports = {
  crearCompetidor,
  crearDisciplina,
  asociarCompetidorADisciplina,
  obtenerCompetidoresConDisciplinas,
  obtenerDisciplinasConCompetidores,
};
