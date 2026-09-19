const { Router } = require('express');
const router = Router();

// Estado en memoria (simulación)
let workoutLogs = [
    {
        id: 501,
        user_id: 12,
        routine_id: 5,
        date: "2026-09-13T18:30:00Z",
        duration_minutes: 65,
        calories_burned: 420,
        notes: "Buena intensidad, se aumentó peso en la última serie.",
        details: [
            {
                exercise_id: 101,
                sets_completed: 4,
                weight_kg: 80.0,
                reps_completed: 10
            }
        ]
    }
];

// GET /v1/workout-logs (Historial general)
router.get('/', (req, res) => {
    const { user_id } = req.query;
    let result = workoutLogs;

    if (user_id) {
        result = result.filter(w => w.user_id === Number(user_id));
    }

    res.status(200).json(result);
});

// GET /v1/workout-logs/:id (Consultar registro específico)
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const log = workoutLogs.find(w => w.id === Number(id));

    if (!log) {
        return res.status(404).json({ error: 'Sesión de entrenamiento no encontrada' });
    }

    res.status(200).json(log);
});

router.post('/', (req, res) => {
    const { user_id, routine_id, duration_minutes, calories_burned, notes, details } = req.body;

    if (!user_id || !routine_id) {
        return res.status(400).json({ error: 'user_id y routine_id son requeridos' });
    }

    const newLog = {
        id: Date.now(),
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

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const index = workoutLogs.findIndex(w => w.id === Number(id));

    if (index === -1) {
        return res.status(404).json({ error: 'Sesión no encontrada' });
    }

    workoutLogs[index] = {
        ...workoutLogs[index],
        ...req.body
    };

    res.status(200).json(workoutLogs[index]);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const index = workoutLogs.findIndex(w => w.id === Number(id));

    if (index === -1) {
        return res.status(404).json({ error: 'Sesión no encontrada' });
    }

    workoutLogs.splice(index, 1);
    res.status(200).json({ message: 'Sesión eliminada correctamente' });
});

module.exports = router;