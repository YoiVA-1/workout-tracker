const express = require('express');
const router = express.Router();

// Estado en memoria (simulación)
let users = [
  {
    id: "b42f53fa-7b30-4b91-8d36-dc1c6ef27611",
    name: "Yoiner Velez",
    email: "yoiner@example.com",
    weight_kg: 70.5,
    height_cm: 175,
    created_at: "2026-09-18T12:00:00Z"
  }
];

// GET /v1/users
router.get('/', (req, res) => {
  res.status(200).json(users);
});

// GET /v1/users/:id
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  res.status(200).json(user);
});

// GET /v1/users/:id/routines
router.get('/:id/routines', (req, res) => {
  const { id } = req.params;
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  res.status(200).json([]);
});

// GET /v1/users/:id/workout-logs
router.get('/:id/workout-logs', (req, res) => {
  const { id } = req.params;
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  res.status(200).json([]);
});

router.post('/', (req, res) => {});
router.put('/:id', (req, res) => {});
router.delete('/:id', (req, res) => {});

module.exports = router;