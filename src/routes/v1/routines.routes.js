const { Router } = require('express');
const router = Router();

// Estado en memoria (simulación)
let routines = [
    {
        id: 5,
        user_id: 12,
        name: "Rutina Torso-Pierna (Día A)",
        description: "Enfoque en fuerza e hipertrofia para el tren superior.",
        exercises: [
            {
                exercise_id: 101,
                name: "Press de Banca Plano",
                target_sets: 4,
                target_reps: 10
            }
        ],
        created_at: "2026-09-13T10:00:00Z"
    }
];

// Rutas básicas (Stubs)
router.get('/', (req, res) => { });
router.get('/:id', (req, res) => { });
router.post('/', (req, res) => { });
router.put('/:id', (req, res) => { });
router.delete('/:id', (req, res) => { });

module.exports = router;