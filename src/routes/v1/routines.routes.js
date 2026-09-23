const express = require('express');
const router = express.Router();

// Estado en memoria (simulación)
let routines = [
    {
        id: "r543",
        user_id: "b42f53fa-7b30-4b91-8d36-dc1c6ef27611",
        name: "Rutina Torso-Pierna (Día A)",
        description: "Enfoque en fuerza e hipertrofia para el tren superior.",
        exercises: [
            {
                exercise_id: "e101-4b91-8d36-dc1c6ef27611",
                name: "Press de Banca Plano",
                target_sets: 4,
                target_reps: 10
            }
        ],
        created_at: "2026-09-13T10:00:00Z"
    }
];

// Cabeceras HTTP
router.use((req, res, next) => {
    res.set('X-API-Version', '1.0.0');
    next();
});

// GET /v1/routines
router.get('/', (req, res) => {
    const { user_id } = req.query;
    let result = routines;

    if (user_id) {
        result = result.filter(r => r.user_id === user_id);
    }

    res.status(200).json(result);
});

// GET /v1/routines/:id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const routine = routines.find(r => r.id === id);

    if (!routine) {
        return res.status(404).json({ error: 'Rutina no encontrada' });
    }

    res.status(200).json(routine);
});

// POST /v1/routines
router.post('/', (req, res) => {
    const { user_id, name, description, exercises } = req.body;

    if (!user_id || !name) {
        return res.status(400).json({ error: 'user_id y name son obligatorios' });
    }

    const newRoutine = {
        id: `${Date.now()}`,
        user_id,
        name,
        description: description || '',
        exercises: exercises || [],
        created_at: new Date().toISOString()
    };

    routines.push(newRoutine);
    res.status(201).json(newRoutine);
});

// PUT /v1/routines/:id
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { user_id, name, description, exercises } = req.body;

    const index = routines.findIndex(r => r.id === id);
    if (index === -1) {
        return res.status(404).json({ error: 'Rutina no encontrada' });
    }

    if (!user_id || !name) {
        return res.status(400).json({ error: 'user_id y name son requeridos para PUT' });
    }

    routines[index] = {
        ...routines[index],
        user_id,
        name,
        description: description !== undefined ? description : routines[index].description,
        exercises: exercises !== undefined ? exercises : routines[index].exercises
    };

    res.status(200).json(routines[index]);
});

// PATCH /v1/routines/:id
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const index = routines.findIndex(r => r.id === id);

    if (index === -1) {
        return res.status(404).json({ error: 'Rutina no encontrada' });
    }

    routines[index] = {
        ...routines[index],
        ...req.body
    };

    res.status(200).json(routines[index]);
});

// DELETE /v1/routines/:id
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const index = routines.findIndex(r => r.id === id);

    if (index === -1) {
        return res.status(404).json({ error: 'Rutina no encontrada' });
    }

    routines.splice(index, 1);
    res.status(204).send();
});

module.exports = router;