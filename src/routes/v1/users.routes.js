const express = require('express');
const router = express.Router();

// Estado en memoria (simulación)
let users = [
  {
    id: "134",
    name: "Yoiner Velez",
    email: "yoiner@example.com",
    weight_kg: 70.5,
    height_cm: 175,
    created_at: "2026-09-18T12:00:00Z"
  }
];

// Cabeceras HTTP
router.use((req, res, next) => {
  res.set('X-API-Version', '1.0.0');
  next();
});

// GET /v1/users
router.get('/', (req, res) => {
  const { search } = req.query;
  let result = users;

  if (search) {
    result = result.filter(u =>
      u.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  res.status(200).json(result);
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

// POST /v1/users
router.post('/', (req, res) => {
  const { name, email, weight_kg, height_cm } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name y email son requeridos' });
  }

  const newUser = {
    id: `${Date.now()}`,
    name,
    email,
    weight_kg: weight_kg || null,
    height_cm: height_cm || null,
    created_at: new Date().toISOString()
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT /v1/users/:id (Actualización COMPLETA)
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { name, email, weight_kg, height_cm } = req.body;

  const index = users.findIndex(u => u.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  if (!name || !email) {
    return res.status(400).json({ error: 'Name y email son requeridos' });
  }

  users[index] = {
    ...users[index],
    name,
    email,
    weight_kg: weight_kg !== undefined ? weight_kg : users[index].weight_kg,
    height_cm: height_cm !== undefined ? height_cm : users[index].height_cm
  };

  res.status(200).json(users[index]);
});

// PATCH /v1/users/:id (Actualización PARCIAL)
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const index = users.findIndex(u => u.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  users[index] = {
    ...users[index],
    ...req.body
  };

  res.status(200).json(users[index]);
});

// DELETE /v1/users/:id
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const index = users.findIndex(u => u.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  users.splice(index, 1);
  res.status(204).send();
});

module.exports = router;