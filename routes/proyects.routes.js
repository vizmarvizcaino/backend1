import { Router } from "express";
import { getProyects, 
        createProyect, 
        updateProyect, 
        deleteProyect, 
        getProyect,
        getProyectTasks} from "../controllers/proyects.controller.js"
import { isUserAuthenticated } from "../middleware/auth.middleware.js";
const router = Router()

// Con esta ruta traemos todos los proyectos
router.get('/proyects',getProyects);

// Con esta ruta creamos un proyectos
router.post('/proyects',createProyect);

// Con esta ruta actualizamos un proyectos
router.put('/proyects/:id',[isUserAuthenticated],updateProyect);

// Con esta ruta eliminamos un proyectos
router.delete('/proyects/:id',[isUserAuthenticated],deleteProyect);

// Con esta ruta traemos un proyecto
router.get('/proyect/:id',getProyect);

// Con esta ruta nos mostrar todas las tareas que pertenecen a un proyecto debido a surelacion
router.get('/proyect/:id/tasks',[isUserAuthenticated],getProyectTasks);

export default router;