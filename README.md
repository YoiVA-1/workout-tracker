## Endpoints del Recurso Ejercicios (`/v1/exercises`)

- **GET /v1/exercises**: Catálogo general de ejercicios (soporta `?search=` y `?category=`).
- **GET /v1/exercises/:id**: Detalle de un ejercicio por ID.
- **POST /v1/exercises**: Agregar un nuevo ejercicio al catálogo.
- **PUT /v1/exercises/:id**: Actualizar un ejercicio existente.
- **DELETE /v1/exercises/:id**: Eliminar un ejercicio.



## Endpoints del Recurso Rutinas (`/v1/routines`)

- **GET /v1/routines**: Obtener todas las rutinas (soporta `?user_id=`).
- **GET /v1/routines/:id**: Consultar una rutina específica por ID.
- **POST /v1/routines**: Crear una nueva plantilla de rutina.
- **PUT /v1/routines/:id**: Modificar una rutina existente.
- **DELETE /v1/routines/:id**: Eliminar una rutina del sistema.