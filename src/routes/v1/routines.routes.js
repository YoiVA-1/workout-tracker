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

// GET /v1/routines (Obtener todas las rutinas)
router.get('/', (req, res) => {
    res.status(200).json(routines);
});

// GET /v1/routines/:id (Consultar rutina específica por ID)
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const routine = routines.find(r => r.id === Number(id));

    if (!routine) {
        return res.status(404).json({ error: 'Rutina no encontrada' });
    }

    res.status(200).json(routine);
});

router.post('/', (req, res) => {
    const { user_id, name, description, exercises } = req.body;

    if (!user_id || !name) {
        return res.status(400).json({ error: 'user_id y name son obligatorios' });
    }

    const newRoutine = {
        id: Date.now(),
        user_id,
        name,
        description: description || '',
        exercises: exercises || [],
        created_at: new Date().toISOString()
    };

    routines.push(newRoutine);
    res.status(201).json(newRoutine);
});

router.put('/:id', (req, res) => { });
router.delete('/:id', (req, res) => { });

module.exports = router;