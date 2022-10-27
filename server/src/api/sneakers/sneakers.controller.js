const Sneaker = require("./sneakers.model");


// Metodo para recuperar todos los sneakeres de nuestra DB
const getAll = async (req, res, next) => {
    try {
        // find es un método de mongoose para recuperar todos los sneakeres
        const sneakers = await Sneaker.find();
        // res - es loq ue enviaremos al frontal
        // cabecera - status 200 Todo OK
        // cuerpo -> sneakers - json
        res.status(200).json(sneakers);
    } catch (error) {
        return next(error)
    }
}

// Metodo para recuperar un sneaker de nuestra DB
const getOne = async (req, res, next) => {
    try {
        // req -> recuperar valores de la request: http://jdhfjdh....10 
        const { id } = req.params;
        // findById en el que por param recibe un id y te lo busca
        const sneaker = await Sneaker.findById(id);
        res.status(200).json(sneaker);
    } catch (error) {
        return next(error)
    }
}

// Método para crear un nuevo sneaker
const postOne = async (req, res, next) => {
    try {
        // Nuevo sneaker para introducir los datos del front
        const sneaker = new Sneaker();
        // Este body es la info que nos llega desde el front
        sneaker.id = req.body.id
        sneaker.brand = req.body.brand;
        sneaker.model = req.body.model;
        sneaker.img = req.body.img;

        // Método de mongoose - que guarda el sneaker en la DB
        const sneakerDB = await sneaker.save();
        return res.status(201).json(sneakerDB)
    } catch (error) {
        return next(error)
    }
}

// Método para modificar un sneaker en base a su id
const patchOne = async (req, res, next) => {
    try {
        const { id } = req.params;
        const sneaker = new Sneaker(req.body);
        // id nos lo generan y es un numero único
        sneaker._id = id;
        // updatear el sneaker -> Método de mongoose - que sustituye el sneaker en la DB
        // Param 1- el id recuperado
        // param 2 - el sneaker con la info del front
        const updateSneaker = await Sneaker.findByIdAndUpdate(id, sneaker);
        return res.status(200).json(updateSneaker);
    } catch (error) {
        return next(error);
    }
}

// Método para eliminar un sneaker en base a su id
const deleteOne = async (req, res, next) => {
    try {
        const { id } = req.params;
        // borrar el sneaker -> Método de mongoose - que borra el sneaker en la DB por el id recuperado
        const sneaker = await Sneaker.findByIdAndDelete(id);
        return res.status(200).json(sneaker);
    } catch (error) {
        return next(error);
    }
}

module.exports = {
    getAll,
    getOne,
    postOne,
    patchOne,
    deleteOne
}