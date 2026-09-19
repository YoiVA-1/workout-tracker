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

router.post('/', (req, res) => {
    const { name, description } = req.body;

    if (!name) {
        return res.status(400).json({ error: 'El nombre de la categoría es obligatorio' });
    }

    const newCategory = {
        id: Date.now(),
        name,
        description: description || ''
    };

    categories.push(newCategory);
    res.status(201).json(newCategory);
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const index = categories.findIndex(c => c.id === Number(id));

    if (index === -1) {
        return res.status(404).json({ error: 'Categoría no encontrada' });
    }

    categories[index] = {
        ...categories[index],
        ...req.body
    };

    res.status(200).json(categories[index]);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const index = categories.findIndex(c => c.id === Number(id));

    if (index === -1) {
        return res.status(404).json({ error: 'Categoría no encontrada' });
    }

    categories.splice(index, 1);
    res.status(200).json({ message: 'Categoría eliminada correctamente' });
});

module.exports = router;