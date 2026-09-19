const { Router } = require('express');
const router = Router();

// Estado en memoria (simulación)
let exercises = [
    {
        id: 101,
        name: "Press de Banca Plano",
        description: "Ejercicio compuesto enfocado en el desarrollo del pectoral mayor y tríceps.",
        category: {
            id: 1,
            name: "Pecho"
        },
        equipment_needed: "Barra y discos"
    }
];


router.get('/', (req, res) => {
    res.status(200).json(exercises);
});


router.get('/:id', (req, res) => {
    const { id } = req.params;
    const exercise = exercises.find(e => e.id === Number(id));

    if (!exercise) {
        return res.status(404).json({ error: 'Ejercicio no encontrado' });
    }

    res.status(200).json(exercise);
});

router.post('/', (req, res) => {
    const { name, description, category, equipment_needed } = req.body;

    if (!name) {
        return res.status(400).json({ error: 'El nombre del ejercicio es obligatorio' });
    }

    const newExercise = {
        id: Date.now(),
        name,
        description: description || '',
        category: category || null,
        equipment_needed: equipment_needed || ''
    };

    exercises.push(newExercise);
    res.status(201).json(newExercise);
});

// ... (mantiene los métodos GET y POST)

// PUT /v1/exercises/:id (Actualizar datos de un ejercicio)
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const index = exercises.findIndex(e => e.id === Number(id));

    if (index === -1) {
        return res.status(404).json({ error: 'Ejercicio no encontrado' });
    }

    exercises[index] = {
        ...exercises[index],
        ...req.body
    };

    res.status(200).json(exercises[index]);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const index = exercises.findIndex(e => e.id === Number(id));

    if (index === -1) {
        return res.status(404).json({ error: 'Ejercicio no encontrado' });
    }

    exercises.splice(index, 1);
    res.status(200).json({ message: 'Ejercicio eliminado correctamente' });
});

module.exports = router;