// Es el enrutamiento | EndPoints que nos da express
const SneakerRoutes = require('express').Router();

// Importación en ES5 - Métodos de controller
const {
    getAll,
    getOne,
    postOne,
    patchOne,
    deleteOne
} = require("./sneakers.controller");

// Traer todos los sneakers en el endpoint /all
SneakerRoutes.get('/', getAll);
// Traer Sneaker por id
SneakerRoutes.get('/:id', getOne);
// Crear un Sneaker POST
SneakerRoutes.post('/', postOne);
// Modificar Sneaker
SneakerRoutes.patch('/:id', patchOne);
// Delete Sneaker
SneakerRoutes.delete('/:id', deleteOne);

module.exports = SneakerRoutes;