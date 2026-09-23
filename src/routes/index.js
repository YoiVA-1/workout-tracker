const express = require('express');
const app = express();

const PORT = process.env.PORT || 8000;

// Middlewares globales
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Importación de rutas desde src/routes/v1/
const usersRouter = require('./v1/users.routes');
const exercisesRouter = require('./v1/exercises.routes');
const routinesRouter = require('./v1/routines.routes');
const workoutLogsRouter = require('./v1/workout-logs.routes');
const categoriesRouter = require('./v1/categories.routes');

// Montaje de rutas
app.use('/v1/users', usersRouter);
app.use('/v1/exercises', exercisesRouter);
app.use('/v1/routines', routinesRouter);
app.use('/v1/workout-logs', workoutLogsRouter);
app.use('/v1/categories', categoriesRouter);

// Ruta raíz
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'API REST Fitness Tracker activa',
        version: '1.0.0'
    });
});

// Manejo 404
app.use((req, res) => {
    res.status(404).json({ error: 'Ruta no encontrada' });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});