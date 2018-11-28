const request = require("request");
const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/';


getAllAutores = () => {
    const URI = 'authors/'
    return new Promise((resolve, reject) =>{
        request.get(`${URL_BASE}${URI}`, (err, response, body)=>{
            const json = JSON.parse(body);
            response.statusCode === 200
                ? resolve(json)
                : reject ('Error en el get')
        })
    })
}

/*
getAllAutores().then((res) =>{
    console.log(res);
}).catch((err) =>{
    console.log(err);
})
*/

createAutor = (nombre, apellidos, bio, genero, edad) =>{
    const URI = 'authors/';
    const autorAEnviar = {
        name : nombre, 
        last_name : apellidos,
        nacionalidad : 'MX', 
        biography : bio, 
        gender : genero, 
        age: edad
    }
    const URL = `${URL_BASE}${URI}`;
    return new Promise ((resolve, reject) =>{
        request.post({url: URL, form: autorAEnviar}, (err, response, body)=>{
            const json = JSON.parse(body);
            response.statusCode === 201
                ? resolve(json)
                : reject('error en el post')
        })
    })
}

/*
createAutor('Liz', 
    'Villegas', 
    'Tech', 
    'F', 
    30).then((res) =>{
        console.log(res);
    }).catch((err) =>{
        console.log(err);
    })
*/

getAutorById = (id) =>{
    const URI = 'authors/';
    return new Promise((resolve, reject) =>{
        request.get(`${URL_BASE}${URI}${id}`, (err, response, body) =>{
            const json = JSON.parse(body);
            response.statusCode === 200
                ? resolve(json)
                : reject (err)
        })
    })
}

// getAutorById('1699').then((res) =>{
//     console.log(res);
// }).catch((err) =>{
//     console.log(err);
// })


updateAutor = (id, name, last_name, biography, gender, age) => {
    const URI = 'authors/';
    const autorNuevo = {
        name, 
        last_name,
        nacionalidad : 'MX',
        biography,
        gender,
        age
    }

    const URL = `${URL_BASE}${URI}${id}/`;
    return new Promise ((resolve, reject) =>{
        request.put({url: URL, form: autorNuevo}, (err, response, body)=>{
            const json = JSON.parse(body);
            response.statusCode === 200
                ? resolve(json)
                : reject(err)
        })
    })
}

// updateAutor(1699, 'Liz', 'Vazquez', 'Cinta Roja', 'M', 20).then((res) =>{
//     console.log(res);
// }).catch((err) =>{
//     console.log(err);
// })


const express = require("express");