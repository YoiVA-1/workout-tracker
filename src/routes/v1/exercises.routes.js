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

// GET /v1/exercises (Listar todo el catálogo)
router.get('/', (req, res) => {
    res.status(200).json(exercises);
});

// GET /v1/exercises/:id (Detalle de un ejercicio específico)
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const exercise = exercises.find(e => e.id === Number(id));

    if (!exercise) {
        return res.status(404).json({ error: 'Ejercicio no encontrado' });
    }

    res.status(200).json(exercise);
});

router.post('/', (req, res) => { });
router.put('/:id', (req, res) => { });
router.delete('/:id', (req, res) => { });

module.exports = router;