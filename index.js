// Relación Muchos a Muchos
// Estudiante.belongsToMany(Curso, { through: EstudianteCurso });
// Curso.belongsToMany(Estudiante, { through: EstudianteCurso });


// consigna:
// Queremos modelar un sistema donde los Estudiantes pueden inscribirse en múltiples Cursos, y cada curso puede tener múltiples estudiantes.
// Crear las tablas Estudiantes, Cursos, y una tabla intermedia EstudiantesCursos para manejar la relación muchos a muchos.
// Configurar correctamente las migraciones y modelos.
// Crear controladores para insertar estudiantes y cursos, y vincularlos entre sí.

// Desde index.js, realizar las siguientes operaciones:
// Crear estudiantes y cursos.
// Asociar estudiantes con cursos.
// Consultar estudiantes con sus cursos asociados y viceversa.
// Eliminar un estudiante y verificar que no se rompa la relación.



//inicializar el proyecto
//npm init -y

//instalar lo básico
//npm install sequelize pg pg-hstore 
//npm install --save-dev sequelize-cli

//inicializar sequelize-cli 
//npx sequelize-cli init

//modificar el config/config.json

//crear la base de datos con sequelize
// npx sequelize-cli db:create

//correr las migraciones estudiantes PARA CREAR LA TABLA ESTUDIANTES.
// npx sequelize-cli model:generate --name Estudiante --attributes nombre:string,email:string
//modifico la migracion estudiante si es necesaria.

//correr las migraciones cursos PARA CREAR LA TABLA CURSOS. 
// npx sequelize-cli model:generate --name Curso --attributes nombre:string,descripcion:string
//modifico la migracion cursos si es necesaria.

//correr las migraciones create-estudiantes-cursos PARA CREAR LA TABLA INTERMEDIA ESTUDIANTES-CURSOS. 
// npx sequelize-cli migration:generate --name create-estudiantes-cursos
//modifico la migracion create-estudiantes-cursos si es necesaria.

//una vez modificadas las migraciones y modelos, correr el siguiente comando.
// npx sequelize-cli db:migrate

// crear los controllers y este codigo de index


const {
    crearEstudiante,
    crearCurso,
    asociarEstudianteACurso,
    obtenerEstudiantesConCursos,
    obtenerCursosConEstudiantes,
  } = require('./controllers/estudianteController');
  
  const main = async () => {
    try {
      // Crear estudiantes
      const estudiante1 = await crearEstudiante('Juan Pérez', 'juan.perez@example.com');
      const estudiante2 = await crearEstudiante('María Gómez', 'maria.gomez@example.com');
  
      // Crear cursos
      const curso1 = await crearCurso('Matemáticas', 'Curso de álgebra básica');
      const curso2 = await crearCurso('Historia', 'Historia universal moderna');
  
      // Asociar estudiantes a cursos
      await asociarEstudianteACurso(estudiante1.id, curso1.id);
      await asociarEstudianteACurso(estudiante2.id, curso1.id);
      await asociarEstudianteACurso(estudiante2.id, curso2.id);
  
      // Obtener estudiantes con cursos
      const estudiantesConCursos = await obtenerEstudiantesConCursos();
      console.log('Estudiantes con cursos:', JSON.stringify(estudiantesConCursos, null, 2));
  
      // Obtener cursos con estudiantes
      const cursosConEstudiantes = await obtenerCursosConEstudiantes();
      console.log('Cursos con estudiantes:', JSON.stringify(cursosConEstudiantes, null, 2));
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  main();
  
  