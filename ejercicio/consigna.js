// Consigna
// Queremos modelar un sistema de registro de competencias de atletismo.

// Crear las tablas Competidores, Disciplinas, y una tabla intermedia CompetidoresDisciplinas para manejar la relación muchos a muchos.

// Configurar correctamente las migraciones y modelos.
// Crear controladores para insertar competidores, disciplinas, y vincularlos entre sí.
// Desde index.js, realizar las siguientes operaciones:
// Crear competidores y disciplinas.
// Asociar competidores con disciplinas.
// Consultar disciplinas con sus competidores y viceversa.


//Respuesta

// npm init -y
// npm install sequelize sequelize-cli pg pg-hstore
// npx sequelize-cli init


// {
//     "development": {
//       "username": "postgres",
//       "password": "contraseña",
//       "database": "ejercicio_clase_14",
//       "host": "127.0.0.1",
//       "dialect": "postgres"
//     }
//   }

// npx sequelize-cli db:create

// npx sequelize-cli model:generate --name Competidor --attributes nombre:string,edad:integer,pais:string
// npx sequelize-cli model:generate --name Disciplina --attributes nombre:string,categoria:string
// npx sequelize-cli migration:generate --name create-competidores-disciplinas

//modificamos las migraciones, los modelos y corremos npx sequelize-cli db:migrate

//agregamos controllers y agregamos index.js