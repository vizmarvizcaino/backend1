import { Router } from "express";
import { getTasks, 
        createTask, 
        updateTask, 
        deleteTask, 
        getTask} from "../controllers/tasks.cotroller.js"
const router = Router()

// Con esta ruta traemos todas las tareas
router.get('/tasks',getTasks);

// Con esta ruta creamos las tareas
router.post('/task',createTask);

// Con esta ruta actualizamos una tarea
router.put('/task/:id',updateTask);

// Con esta ruta eliminamos una tarea
router.delete('/task/:id',deleteTask);

// Con esta ruta traemos una tarea
router.get('/task/:id',getTask);

export default router;