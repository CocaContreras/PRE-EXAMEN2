const express = require('express');
const router = express.Router();

const Usuario = require('../controllers/usuario.controller.js');
// Rutas para el controlador de Usuario

router.post('/api/usuarios/create', Usuario.create);
router.get('/api/usuarios/all', Usuario.findAll);
router.get('/api/usuarios/onebyid/:id', Usuario.findById);
router.put('/api/usuarios/update/:id', Usuario.update);
router.delete('/api/usuarios/delete/:id', Usuario.delete);

const Libro = require('../controllers/libro.controller.js');

//Rutas para el controlador de Libro

router.post('/api/libros/create', Libro.create);
router.get('/api/libros/all', Libro.findAll);
router.get('/api/libros/onebyid/:id', Libro.findById);
router.put('/api/libros/update/:id', Libro.update);
router.delete('/api/libros/delete/:id', Libro.delete);

const Autor = require('../controllers/autor.controller.js');

// Rutas para el controlador de Autor

router.post('/api/autores/create', Autor.create);
router.get('/api/autores/all', Autor.findAll);
router.get('/api/autores/onebyid/:id', Autor.findById);
router.put('/api/autores/update/:id', Autor.update);
router.delete('/api/autores/delete/:id', Autor.delete);

module.exports = router;
