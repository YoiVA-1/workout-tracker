const express = require('express');
const router = express.Router();

// Importar rutas especificas 
const PORT = process.env.PORT || 3000;

// 1. Middlewares globales para procesar el cuerpo de las peticiones JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2. Importación de las rutas por recurso
const usersRouter = require('./src/routes/v1/users.routes');
const exercisesRouter = require('./src/routes/v1/exercises.routes');
const routinesRouter = require('./src/routes/v1/routines.routes');
const workoutLogsRouter = require('./src/routes/v1/workout-logs.routes');
const categoriesRouter = require('./src/routes/v1/categories.routes');

// 3. Montaje de rutas asociadas al prefijo /v1
app.use('/v1/users', usersRouter);
app.use('/v1/exercises', exercisesRouter);
app.use('/v1/routines', routinesRouter);
app.use('/v1/workout-logs', workoutLogsRouter);
app.use('/v1/categories', categoriesRouter);

// Ruta raíz de prueba o verificación de estado de la API
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'API REST Fitness Tracker activa',
        version: '1.0.0',
        documentation: '/v1'
    });
});

// Manejo de rutas no encontradas (404 Global)
app.use((req, res) => {
    res.status(404).json({ error: 'Ruta no encontrada en el servidor' });
});

// 4. Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
});