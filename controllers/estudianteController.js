const { Estudiante, Curso } = require('../models');

// Crear estudiante
async function crearEstudiante(nombre, email) {
  return await Estudiante.create({ nombre, email });
}

// Crear curso
async function crearCurso(nombre, descripcion) {
  return await Curso.create({ nombre, descripcion });
}

// Asociar estudiante con curso
async function asociarEstudianteACurso(estudianteId, cursoId) {
  const estudiante = await Estudiante.findByPk(estudianteId);
  const curso = await Curso.findByPk(cursoId);
  if (estudiante && curso) {
    await estudiante.addCurso(curso);
    console.log(`Estudiante asociado al curso exitosamente.`);
  }
}

// Obtener estudiantes con cursos
async function obtenerEstudiantesConCursos() {
  return await Estudiante.findAll({ include: Curso });
}

// Obtener cursos con estudiantes
async function obtenerCursosConEstudiantes() {
  return await Curso.findAll({ include: Estudiante });
}

module.exports = {
  crearEstudiante,
  crearCurso,
  asociarEstudianteACurso,
  obtenerEstudiantesConCursos,
  obtenerCursosConEstudiantes,
};

