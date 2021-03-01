const mongoose = require('mongoose');

const Proveedor = mongoose.model('Proveedor',
  new mongoose.Schema({ nombre: String, apellidos: String })
);

const Mercancia = mongoose.model('Mercancia',
  new mongoose.Schema({ nombre: String, precio: Number })
);

module.exports = {
  Proveedor: Proveedor,
  Mercancia: Mercancia
}


