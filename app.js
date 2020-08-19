const argv = require("./config/yargs").argv;
const porHacer = require("./por-hacer/por_hacer");
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log("Crear tarea");
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);

        porHacer.guardarDB()
            .then(msg => console.log(msg))
            .catch(err => console.log(err));


        break;
    case "listar":
        console.log("listar tarea");
        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log("=========================== TAREA ==============================".green);
            console.log(`Tarea: ${tarea.descripcion}`);
            console.log(`Estado: ${tarea.completado}`);
            console.log("================================================================".green);
        }
        break;
    case "actualizar":
        console.log("actualizar tarea");
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completada);
        console.log(actualizado);
        break;
    case "borrar":
        console.log("Borrar Tarea");
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(`Borrado ${borrado}`);
        break;
    default:
        console.log("Opcion no existe");
        break;
}