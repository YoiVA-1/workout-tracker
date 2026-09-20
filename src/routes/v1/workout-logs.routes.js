const express = require('express');
const router = express.Router();

// Estado en memoria (simulación)
let workoutLogs = [
    {
        id: "w501-4b91-8d36-dc1c6ef27611",
        user_id: "b42f53fa-7b30-4b91-8d36-dc1c6ef27611",
        routine_id: "r5-4b91-8d36-dc1c6ef27611",
        date: "2026-09-18T18:30:00Z",
        duration_minutes: 65,
        calories_burned: 420,
        notes: "Buena intensidad, se aumentó peso en la última serie.",
        details: [
            {
                exercise_id: "e101-4b91-8d36-dc1c6ef27611",
                sets_completed: 4,
                weight_kg: 80.0,
                reps_completed: 10
            }
        ]
    }
];

// Cabeceras HTTP
router.use((req, res, next) => {
    res.set('X-API-Version', '1.0.0');
    next();
});

// GET /v1/workout-logs
router.get('/', (req, res) => {
    const { user_id } = req.query;
    let result = workoutLogs;

    if (user_id) {
        result = result.filter(w => w.user_id === user_id);
    }

    res.status(200).json(result);
});

// GET /v1/workout-logs/:id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const log = workoutLogs.find(w => w.id === id);

    if (!log) {
        return res.status(404).json({ error: 'Sesión de entrenamiento no encontrada' });
    }

    res.status(200).json(log);
});

// POST /v1/workout-logs
router.post('/', (req, res) => {
    const { user_id, routine_id, duration_minutes, calories_burned, notes, details } = req.body;

    if (!user_id || !routine_id) {
        return res.status(400).json({ error: 'user_id y routine_id son requeridos' });
    }

    const newLog = {
        id: `${Date.now()}`,
        user_id,
        routine_id,
        date: new Date().toISOString(),
        duration_minutes: duration_minutes || 0,
        calories_burned: calories_burned || 0,
        notes: notes || '',
        details: details || []
    };

    workoutLogs.push(newLog);
    res.status(201).json(newLog);
});

// PUT /v1/workout-logs/:id
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { user_id, routine_id, duration_minutes, calories_burned, notes, details } = req.body;

    const index = workoutLogs.findIndex(w => w.id === id);
    if (index === -1) {
        return res.status(404).json({ error: 'Sesión no encontrada' });
    }

    if (!user_id || !routine_id) {
        return res.status(400).json({ error: 'user_id y routine_id son requeridos para PUT' });
    }

    workoutLogs[index] = {
        ...workoutLogs[index],
        user_id,
        routine_id,
        duration_minutes: duration_minutes !== undefined ? duration_minutes : workoutLogs[index].duration_minutes,
        calories_burned: calories_burned !== undefined ? calories_burned : workoutLogs[index].calories_burned,
        notes: notes !== undefined ? notes : workoutLogs[index].notes,
        details: details !== undefined ? details : workoutLogs[index].details
    };

    res.status(200).json(workoutLogs[index]);
});

// PATCH /v1/workout-logs/:id
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const index = workoutLogs.findIndex(w => w.id === id);

    if (index === -1) {
        return res.status(404).json({ error: 'Sesión no encontrada' });
    }

    workoutLogs[index] = {
        ...workoutLogs[index],
        ...req.body
    };

    res.status(200).json(workoutLogs[index]);
});

// DELETE /v1/workout-logs/:id
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const index = workoutLogs.findIndex(w => w.id === id);

    if (index === -1) {
        return res.status(404).json({ error: 'Sesión no encontrada' });
    }

    workoutLogs.splice(index, 1);
    res.status(204).send();
});

module.exports = router;