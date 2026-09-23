const express = require('express');
const router = express.Router();

// Estado en memoria (simulación)
let categories = [
    { id: "c1-34", name: "Pecho", description: "Ejercicios para pectoral mayor y menor" },
    { id: "c2-56", name: "Espalda", description: "Ejercicios para dorsal ancho y trapecios" },
    { id: "c3-78", name: "Piernas", description: "Ejercicios para cuadríceps e isquiotibiales" },
    { id: "c4-91", name: "Cardio", description: "Ejercicios de alta intensidad cardiovascular" }
];

// Cabeceras HTTP
router.use((req, res, next) => {
    res.set('X-API-Version', '1.0.0');
    next();
});

// GET /v1/categories
router.get('/', (req, res) => {
    const { search } = req.query;
    let result = categories;

    if (search) {
        result = result.filter(c =>
            c.name.toLowerCase().includes(search.toLowerCase())
        );
    }

    res.status(200).json(result);
});

// GET /v1/categories/:id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const category = categories.find(c => c.id === id);

    if (!category) {
        return res.status(404).json({ error: 'Categoría no encontrada' });
    }

    res.status(200).json(category);
});

// GET /v1/categories/:id/exercises
router.get('/:id/exercises', (req, res) => {
    const { id } = req.params;
    const categoryExists = categories.some(c => c.id === id);

    if (!categoryExists) {
        return res.status(404).json({ error: 'Categoría no encontrada' });
    }

    res.status(200).json([]);
});

// POST /v1/categories
router.post('/', (req, res) => {
    const { name, description } = req.body;

    if (!name) {
        return res.status(400).json({ error: 'El nombre de la categoría es obligatorio' });
    }

    const newCategory = {
        id: `${Date.now()}`,
        name,
        description: description || ''
    };

    categories.push(newCategory);
    res.status(201).json(newCategory);
});

// PUT /v1/categories/:id
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;

    const index = categories.findIndex(c => c.id === id);
    if (index === -1) {
        return res.status(404).json({ error: 'Categoría no encontrada' });
    }

    if (!name || !description) {
        return res.status(400).json({ error: 'Name y description son obligatorios para PUT' });
    }

    categories[index] = {
        ...categories[index],
        name,
        description
    };

    res.status(200).json(categories[index]);
});

// PATCH /v1/categories/:id
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const index = categories.findIndex(c => c.id === id);

    if (index === -1) {
        return res.status(404).json({ error: 'Categoría no encontrada' });
    }

    categories[index] = {
        ...categories[index],
        ...req.body
    };

    res.status(200).json(categories[index]);
});

// DELETE /v1/categories/:id
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const index = categories.findIndex(c => c.id === id);

    if (index === -1) {
        return res.status(404).json({ error: 'Categoría no encontrada' });
    }

    categories.splice(index, 1);
    res.status(204).send();
});

module.exports = router;