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

// Rutas básicas (Stubs)
router.get('/', (req, res) => { });
router.get('/:id', (req, res) => { });
router.post('/', (req, res) => { });
router.put('/:id', (req, res) => { });
router.delete('/:id', (req, res) => { });

module.exports = router;