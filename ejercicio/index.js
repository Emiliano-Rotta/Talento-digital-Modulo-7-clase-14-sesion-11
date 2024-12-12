const {
    crearCompetidor,
    crearDisciplina,
    asociarCompetidorADisciplina,
    obtenerCompetidoresConDisciplinas,
    obtenerDisciplinasConCompetidores,
  } = require('./controllers/competidorController');
  
  const main = async () => {
    try {
      // Crear competidores
      const competidor1 = await crearCompetidor('Usain Bolt', 36, 'Jamaica');
      const competidor2 = await crearCompetidor('Carl Lewis', 62, 'USA');
  
      // Crear disciplinas
      const disciplina1 = await crearDisciplina('100m Sprint', 'Carrera');
      const disciplina2 = await crearDisciplina('Salto Largo', 'Salto');
  
      // Asociar competidores a disciplinas
      await asociarCompetidorADisciplina(competidor1.id, disciplina1.id);
      await asociarCompetidorADisciplina(competidor1.id, disciplina2.id);
      await asociarCompetidorADisciplina(competidor2.id, disciplina1.id);
  
      // Obtener competidores con disciplinas
      const competidoresConDisciplinas = await obtenerCompetidoresConDisciplinas();
      console.log('Competidores con disciplinas:', JSON.stringify(competidoresConDisciplinas, null, 2));
  
      // Obtener disciplinas con competidores
      const disciplinasConCompetidores = await obtenerDisciplinasConCompetidores();
      console.log('Disciplinas con competidores:', JSON.stringify(disciplinasConCompetidores, null, 2));
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  main();
  
  