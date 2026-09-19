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
    res.status(200).json(workoutLogs);
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

router.post('/', (req, res) => { });
router.put('/:id', (req, res) => { });
router.delete('/:id', (req, res) => { });

module.exports = router;