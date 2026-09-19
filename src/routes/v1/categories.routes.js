const { Router } = require('express');
const router = Router();

// Estado en memoria (simulación)
let categories = [
    { id: 1, name: "Pecho", description: "Ejercicios para pectoral mayor y menor" },
    { id: 2, name: "Espalda", description: "Ejercicios para dorsal ancho y trapecios" },
    { id: 3, name: "Piernas", description: "Ejercicios para cuadríceps e isquiotibiales" },
    { id: 4, name: "Cardio", description: "Ejercicios de alta intensidad cardiovascular" }
];

// Rutas básicas (Stubs)
router.get('/', (req, res) => { });
router.get('/:id', (req, res) => { });
router.get('/:id/exercises', (req, res) => { });
router.post('/', (req, res) => { });
router.put('/:id', (req, res) => { });
router.delete('/:id', (req, res) => { });

module.exports = router;