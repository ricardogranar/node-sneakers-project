// Requerir la librería de mongoose
const mongoose = require('mongoose');
// Creamos un SCHEMA -> Es un método de una clase que nos permite definir un modelo de datos.
const sneakerSchema = new mongoose.Schema(
    // Type: es el tipo de dato
    // Required: si es un campo obligatorio
    // Trim: elimina los espacios al principio y final
    {
        id: { type: Number, required: true, trim: true },
        brand: { type: String, required: true, trim: true },
        model: { type: String, required: false, trim: true },
        img: {type: String, required: false, trim: true }
    },
    // Timestamps: fecha de creación - modificación
    {
        timestamps: true
    }
);

// Guardar en Actor la referencia y el Schema
// actors - es el nombre de mi colección en la DB
const Sneaker = mongoose.model("sneakers", sneakerSchema);
// Exportar ES5
module.exports = Sneaker;