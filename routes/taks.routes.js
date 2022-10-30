import { Router } from "express";
import { getTasks, 
        createTask, 
        updateTask, 
        deleteTask, 
        getTask} from "../controllers/tasks.cotroller.js"
import { isUserAuthenticated } from "../middleware/auth.middleware.js";
const router = Router()

// Con esta ruta traemos todas las tareas
router.get('/tasks',[isUserAuthenticated],getTasks);

// Con esta ruta creamos las tareas
router.post('/task',[isUserAuthenticated],createTask);

// Con esta ruta actualizamos una tarea
router.put('/task/:id',[isUserAuthenticated],updateTask);

// Con esta ruta eliminamos una tarea
router.delete('/task/:id',[isUserAuthenticated],deleteTask);

// Con esta ruta traemos una tarea
router.get('/task/:id',[isUserAuthenticated],getTask);

export default router;