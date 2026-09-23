const express = require('express');
const router = express.Router();

// Estado en memoria (simulación)
let exercises = [
    {
        id: "e123",
        name: "Press de Banca Plano",
        description: "Ejercicio compuesto enfocado en el desarrollo del pectoral mayor y tríceps.",
        category: {
            id: "c1-4b91-8d36-dc1c6ef27611",
            name: "Pecho"
        },
        equipment_needed: "Barra y discos"
    }
];

// Cabeceras HTTP
router.use((req, res, next) => {
    res.set('X-API-Version', '1.0.0');
    next();
});

// GET /v1/exercises
router.get('/', (req, res) => {
    const { search, category } = req.query;
    let result = exercises;

    if (search) {
        result = result.filter(e =>
            e.name.toLowerCase().includes(search.toLowerCase())
        );
    }

    if (category) {
        result = result.filter(e =>
            e.category && e.category.name.toLowerCase() === category.toLowerCase()
        );
    }

    res.status(200).json(result);
});

// GET /v1/exercises/:id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const exercise = exercises.find(e => e.id === id);

    if (!exercise) {
        return res.status(404).json({ error: 'Ejercicio no encontrado' });
    }

    res.status(200).json(exercise);
});

// POST /v1/exercises
router.post('/', (req, res) => {
    const { name, description, category, equipment_needed } = req.body;

    if (!name) {
        return res.status(400).json({ error: 'El nombre del ejercicio es obligatorio' });
    }

    const newExercise = {
        id: `${Date.now()}`,
        name,
        description: description || '',
        category: category || null,
        equipment_needed: equipment_needed || ''
    };

    exercises.push(newExercise);
    res.status(201).json(newExercise);
});

// PUT /v1/exercises/:id
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, description, category, equipment_needed } = req.body;

    const index = exercises.findIndex(e => e.id === id);
    if (index === -1) {
        return res.status(404).json({ error: 'Ejercicio no encontrado' });
    }

    if (!name || !description || !equipment_needed) {
        return res.status(400).json({ error: 'Name, description y equipment_needed son requeridos para PUT' });
    }

    exercises[index] = {
        ...exercises[index],
        name,
        description,
        category: category !== undefined ? category : exercises[index].category,
        equipment_needed
    };

    res.status(200).json(exercises[index]);
});

// PATCH /v1/exercises/:id
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const index = exercises.findIndex(e => e.id === id);

    if (index === -1) {
        return res.status(404).json({ error: 'Ejercicio no encontrado' });
    }

    exercises[index] = {
        ...exercises[index],
        ...req.body
    };

    res.status(200).json(exercises[index]);
});

// DELETE /v1/exercises/:id
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const index = exercises.findIndex(e => e.id === id);

    if (index === -1) {
        return res.status(404).json({ error: 'Ejercicio no encontrado' });
    }

    exercises.splice(index, 1);
    res.status(204).send();
});

module.exports = router;