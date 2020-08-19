const optCrear = {
    descripcion: {
        demand: true,
        alias: "d"
    }
};

const optActualizar = {
    descripcion: {
        demand: true,
        alias: "d"
    },
    completada: {
        alias: "c",
        default: true
    }
};

const argv = require('yargs')
    .command('crear', 'Crea una nueva tarea', optCrear)
    .command('actualizar', 'Actualiza una  tarea', optActualizar)
    .command('borrar', 'Borra una tarea', optCrear)
    .help()
    .argv;


module.exports = {
    argv
};