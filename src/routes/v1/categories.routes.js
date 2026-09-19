const { Router } = require('express');
const router = Router();

// Estado en memoria (simulación)
let categories = [
    { id: 1, name: "Pecho", description: "Ejercicios para pectoral mayor y menor" },
    { id: 2, name: "Espalda", description: "Ejercicios para dorsal ancho y trapecios" },
    { id: 3, name: "Piernas", description: "Ejercicios para cuadríceps e isquiotibiales" },
    { id: 4, name: "Cardio", description: "Ejercicios de alta intensidad cardiovascular" }
];

// GET /v1/categories (Listar todas las categorías)
router.get('/', (req, res) => {
    res.status(200).json(categories);
});

// GET /v1/categories/:id (Obtener detalles de una categoría específica)
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const category = categories.find(c => c.id === Number(id));

    if (!category) {
        return res.status(404).json({ error: 'Categoría no encontrada' });
    }

    res.status(200).json(category);
});

// GET /v1/categories/:id/exercises (Filtra los ejercicios de una categoría)
router.get('/:id/exercises', (req, res) => {
    const { id } = req.params;
    const categoryExists = categories.some(c => c.id === Number(id));

    if (!categoryExists) {
        return res.status(404).json({ error: 'Categoría no encontrada' });
    }

    res.status(200).json([]);
});

router.post('/', (req, res) => { });
router.put('/:id', (req, res) => { });
router.delete('/:id', (req, res) => { });

module.exports = router;