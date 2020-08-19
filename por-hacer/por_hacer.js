const fs = require('fs');

let listadoPorHacer = [];

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };
    listadoPorHacer.push(porHacer);
    return porHacer;
}

let guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    return new Promise((resolve, reject) => {
        fs.writeFile("db/data.json", data, (err) => {
            if (err)
                reject(err);
            else
                resolve("DB Actualizada");
        });
    });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require("../db/data.json");
    } catch (error) {
        listadoPorHacer = [];
    }

}

const getListado = () => {
    try {
        listadoPorHacer = require("../db/data.json");
    } catch (error) {
        listadoPorHacer = [];
    }

    return listadoPorHacer;
}

const actualizar = (descripcion, completado) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else
        return false;
}

const borrar = (descripcion) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer = listadoPorHacer.filter(tarea => tarea.descripcion != descripcion);
        guardarDB();
        return true;
    } else
        return false;
}

module.exports = {
    crear,
    guardarDB,
    getListado,
    actualizar,
    borrar
}