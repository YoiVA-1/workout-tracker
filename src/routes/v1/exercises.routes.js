const { Router } = require('express');
const router = Router();

// Estado en memoria (simulación)
let exercises = [
    {
    id: 101,
    name: "Press de Banca Plano",
    description: "Ejercicio compuesto enfocado en el desarrollo del pectoral mayor y tríceps.",
    category: {
    id: 1,
    name: "Pecho"
    },
    equipment_needed: "Barra y discos"
    }
];

// Rutas básicas (Stubs)
router.get('/', (req, res) => {});
router.get('/:id', (req, res) => {});
router.post('/', (req, res) => {});
router.put('/:id', (req, res) => {});
router.delete('/:id', (req, res) => {});

module.exports = router;