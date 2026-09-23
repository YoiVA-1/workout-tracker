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


- **PATCH /v1/users/:id**: Actualización parcial de usuario.
- **PATCH /v1/exercises/:id**: Actualización parcial de ejercicio.
- **PATCH /v1/routines/:id**: Actualización parcial de rutina.
- **PATCH /v1/workout-logs/:id**: Actualización parcial de entrenamiento.
- **PATCH /v1/categories/:id**: Actualización parcial de categoría.

# 🏋️ Workout Tracker API - Guía de Pruebas y Endpoints (CRUD)

Esta documentación sirve como guía de referencia rápida para probar las operaciones **CRUD** (Create, Read, Update, Delete) de la API REST utilizando **Thunder Client** o **Postman**.

---

## 🛠️ URL Base

```text
http://localhost:8000/v1
```

---

## 📑 Tabla de Contenidos

1. [Categorías (`categories.routes.js`)](#1-categorías)
2. [Ejercicios (`exercises.routes.js`)](#2-ejercicios)
3. [Usuarios (`users.routes.js`)](#3-usuarios)
4. [Rutinas (`routines.routes.js`)](#4-rutinas)
5. [Registros de Entrenamiento (`workout-logs.routes.js`)](#5-registros-de-entrenamiento)

---

## 1. Categorías

Módulo encargado de gestionar las categorías o grupos musculares de los ejercicios.

| Método | Endpoint | Descripción |
| :--- | :--- | :--- |
| `GET` | `/categories` | Obtener todas las categorías |
| `GET` | `/categories/:id` | Obtener una categoría por ID |
| `POST` | `/categories` | Crear una nueva categoría |
| `PUT` | `/categories/:id` | Actualizar una categoría existente |
| `DELETE` | `/categories/:id` | Eliminar una categoría |

### 🟢 GET - Obtener todas
* **URL:** `http://localhost:8000/v1/categories`

### 🟢 GET - Obtener por ID
* **URL:** `http://localhost:8000/v1/categories/c1-4b91-8d36-dc1c6ef27611`

### 🟡 POST - Crear Categoría
* **URL:** `http://localhost:8000/v1/categories`
* **Body (JSON):**
```json
{
  "name": "Bíceps y Tríceps",
  "description": "Ejercicios enfocados en el desarrollo de brazos"
}
```

### 🟠 PUT - Actualizar Categoría
* **URL:** `http://localhost:8000/v1/categories/c1-4b91-8d36-dc1c6ef27611`
* **Body (JSON):**
```json
{
  "name": "Pecho y Torso Superior",
  "description": "Ejercicios para pectoral mayor, menor y serratos"
}
```

### 🔴 DELETE - Eliminar Categoría
* **URL:** `http://localhost:8000/v1/categories/c1-4b91-8d36-dc1c6ef27611`

---

## 2. Ejercicios

Módulo que gestiona los ejercicios disponibles en el sistema.

| Método | Endpoint | Descripción |
| :--- | :--- | :--- |
| `GET` | `/exercises` | Obtener todos los ejercicios |
| `GET` | `/exercises?category=Pecho` | Filtrar ejercicios por categoría (Query Param) |
| `POST` | `/exercises` | Crear un nuevo ejercicio |
| `PUT` | `/exercises/:id` | Actualizar un ejercicio existente |
| `DELETE` | `/exercises/:id` | Eliminar un ejercicio |

### 🟢 GET - Obtener todos
* **URL:** `http://localhost:8000/v1/exercises`

### 🟢 GET - Filtrar por Categoría (Query Parameter)
* **URL:** `http://localhost:8000/v1/exercises?category=Pecho`

### 🟡 POST - Crear Ejercicio
* **URL:** `http://localhost:8000/v1/exercises`
* **Body (JSON):**
```json
{
  "name": "Dominadas Pronas",
  "description": "Ejercicio con peso corporal para fortalecimiento de la espalda y dorsales.",
  "category": {
    "id": "c2-4b91-8d36-dc1c6ef27622",
    "name": "Espalda"
  },
  "equipment_needed": "Barra fija de dominadas"
}
```

### 🟠 PUT - Actualizar Ejercicio
* **URL:** `http://localhost:8000/v1/exercises/e101-4b91-8d36-dc1c6ef27611`
* **Body (JSON):**
```json
{
  "name": "Press de Banca Inclinado",
  "description": "Variación enfocada en el haz clavicular del pectoral mayor.",
  "category": {
    "id": "c1-4b91-8d36-dc1c6ef27611",
    "name": "Pecho"
  },
  "equipment_needed": "Banco inclinado, barra y discos"
}
```

### 🔴 DELETE - Eliminar Ejercicio
* **URL:** `http://localhost:8000/v1/exercises/e101-4b91-8d36-dc1c6ef27611`

---

## 3. Usuarios

Módulo para administrar a los usuarios registrados en la plataforma.

| Método | Endpoint | Descripción |
| :--- | :--- | :--- |
| `GET` | `/users` | Obtener todos los usuarios |
| `POST` | `/users` | Crear un usuario |
| `PUT` | `/users/:id` | Actualizar los datos de un usuario |
| `DELETE` | `/users/:id` | Eliminar un usuario |

### 🟢 GET - Obtener todos
* **URL:** `http://localhost:8000/v1/users`

### 🟡 POST - Crear Usuario
* **URL:** `http://localhost:8000/v1/users`
* **Body (JSON):**
```json
{
  "name": "Yoiner Velez",
  "email": "yoinerhola@ejemplo.com",
  "role": "atleta"
}
```

### 🟠 PUT - Actualizar Usuario
* **URL:** `http://localhost:8000/v1/users/b42f53fa-7b30-4b91-8d36-dc1c6ef27611`
* **Body (JSON):**
```json
{
  "name": "Yoiner Velez Areiza",
  "email": "yoiner.velez@ejemplo.com",
  "role": "administrador"
}
```

### 🔴 DELETE - Eliminar Usuario
* **URL:** `http://localhost:8000/v1/users/b42f53fa-7b30-4b91-8d36-dc1c6ef27611`

---

## 4. Rutinas

Módulo para gestionar las planificaciones y estructuras de entrenamiento creadas por los usuarios.

| Método | Endpoint | Descripción |
| :--- | :--- | :--- |
| `GET` | `/routines` | Obtener todas las rutinas |
| `POST` | `/routines` | Crear una nueva rutina |
| `PUT` | `/routines/:id` | Actualizar una rutina existente |
| `DELETE` | `/routines/:id` | Eliminar una rutina |

### 🟢 GET - Obtener todas
* **URL:** `http://localhost:8000/v1/routines`

### 🟡 POST - Crear Rutina
* **URL:** `http://localhost:8000/v1/routines`
* **Body (JSON):**
```json
{
  "user_id": "b42f53fa-7b30-4b91-8d36-dc1c6ef27611",
  "name": "Rutina de Espalda y Bíceps",
  "description": "Enfoque en tracciones e hipertrofia de brazos.",
  "exercises": [
    {
      "exercise_id": "e103-4b91-8d36-dc1c6ef27633",
      "name": "Jalón al Pecho",
      "target_sets": 4,
      "target_reps": 12
    }
  ]
}
```

### 🟠 PUT - Actualizar Rutina
* **URL:** `http://localhost:8000/v1/routines/r5-4b91-8d36-dc1c6ef27611`
* **Body (JSON):**
```json
{
  "user_id": "b42f53fa-7b30-4b91-8d36-dc1c6ef27611",
  "name": "Rutina Torso-Pierna (Ajustada)",
  "description": "Aumento de intensidad en series de fuerza.",
  "exercises": [
    {
      "exercise_id": "e101-4b91-8d36-dc1c6ef27611",
      "name": "Press de Banca Plano",
      "target_sets": 5,
      "target_reps": 8
    }
  ]
}
```

### 🔴 DELETE - Eliminar Rutina
* **URL:** `http://localhost:8000/v1/routines/r5-4b91-8d36-dc1c6ef27611`

---

## 5. Registros de Entrenamiento

Módulo para registrar el historial de las sesiones de ejercicio ejecutadas por el usuario (`workout-logs`).

| Método | Endpoint | Descripción |
| :--- | :--- | :--- |
| `GET` | `/workout-logs` | Obtener todos los registros |
| `POST` | `/workout-logs` | Crear un nuevo registro |
| `PUT` | `/workout-logs/:id` | Actualizar un registro existente |
| `DELETE` | `/workout-logs/:id` | Eliminar un registro |

### 🟢 GET - Obtener todos
* **URL:** `http://localhost:8000/v1/workout-logs`

### 🟡 POST - Registrar Entrenamiento
* **URL:** `http://localhost:8000/v1/workout-logs`
* **Body (JSON):**
```json
{
  "user_id": "b42f53fa-7b30-4b91-8d36-dc1c6ef27611",
  "routine_id": "r5-4b91-8d36-dc1c6ef27611",
  "date": "2026-09-23T18:30:00Z",
  "duration_minutes": 60,
  "calories_burned": 400,
  "notes": "Entrenamiento completado sin inconvenientes.",
  "details": [
    {
      "exercise_id": "e101-4b91-8d36-dc1c6ef27611",
      "sets_completed": 4,
      "weight_kg": 85,
      "reps_completed": 10
    }
  ]
}
```

### 🟠 PUT - Actualizar Registro de Entrenamiento
* **URL:** `http://localhost:8000/v1/workout-logs/w501-4b91-8d36-dc1c6ef27611`
* **Body (JSON):**
```json
{
  "user_id": "b42f53fa-7b30-4b91-8d36-dc1c6ef27611",
  "routine_id": "r5-4b91-8d36-dc1c6ef27611",
  "date": "2026-09-18T18:30:00Z",
  "duration_minutes": 70,
  "calories_burned": 450,
  "notes": "Se extendió el entrenamiento 5 minutos adicionales.",
  "details": [
    {
      "exercise_id": "e101-4b91-8d36-dc1c6ef27611",
      "sets_completed": 4,
      "weight_kg": 85,
      "reps_completed": 10
    }
  ]
}
```

### 🔴 DELETE - Eliminar Registro de Entrenamiento
* **URL:** `http://localhost:8000/v1/workout-logs/w501-4b91-8d36-dc1c6ef27611`