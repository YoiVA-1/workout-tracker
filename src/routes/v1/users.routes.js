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

// Rutas básicas (Stubs)
router.get('/', (req, res) => {});
router.get('/:id', (req, res) => {});
router.post('/', (req, res) => {});
router.put('/:id', (req, res) => {});
router.delete('/:id', (req, res) => {});

module.exports = router;