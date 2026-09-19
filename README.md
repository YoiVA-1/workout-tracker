## Endpoints del Recurso Usuarios (`/v1/users`)

- **GET /v1/users**: Lista general de usuarios (soporta `?search=`).
- **GET /v1/users/:id**: Información de un usuario por ID.
- **GET /v1/users/:id/routines**: Rutinas del usuario.
- **GET /v1/users/:id/workout-logs**: Historial de entrenamientos del usuario.
- **POST /v1/users**: Registro de nuevo usuario.
- **PUT /v1/users/:id**: Actualización completa.
- **DELETE /v1/users/:id**: Eliminación de usuario.

## Endpoints del Recurso Ejercicios (`/v1/exercises`)

- **GET /v1/exercises**: Catálogo general de ejercicios (soporta `?search=` y `?category=`).
- **GET /v1/exercises/:id**: Detalle de un ejercicio por ID.
- **POST /v1/exercises**: Agregar un nuevo ejercicio al catálogo.
- **PUT /v1/exercises/:id**: Actualizar un ejercicio existente.

## Endpoints del Recurso Rutinas (`/v1/routines`)

- **GET /v1/routines**: Obtener todas las rutinas (soporta `?user_id=`).
- **GET /v1/routines/:id**: Consultar una rutina específica por ID.
- **POST /v1/routines**: Crear una nueva plantilla de rutina.
- **PUT /v1/routines/:id**: Modificar una rutina existente.
- **DELETE /v1/routines/:id**: Eliminar una rutina del sistema.-

## Endpoints del Recurso Sesiones de Entrenamiento (`/v1/workout-logs`)

- **GET /v1/workout-logs**: Historial general de entrenamientos (soporta `?user_id=`).
- **GET /v1/workout-logs/:id**: Registro de un entrenamiento específico por ID.
- **POST /v1/workout-logs**: Registrar una nueva sesión de entrenamiento.
- **PUT /v1/workout-logs/:id**: Modificar una sesión registrada.
- **DELETE /v1/workout-logs/:id**: Eliminar una sesión del historial.

## Endpoints del Recurso Categorías (`/v1/categories`)

- **GET /v1/categories**: Listar todas las categorías (soporta `?search=`).
- **GET /v1/categories/:id**: Detalles de una categoría específica por ID.
- **GET /v1/categories/:id/exercises**: Filtra los ejercicios que pertenecen a una categoría.
- **POST /v1/categories**: Crear una nueva categoría.
- **PUT /v1/categories/:id**: Actualizar una categoría existente.
- **DELETE /v1/categories/:id**: Eliminar una categoría del sistema.