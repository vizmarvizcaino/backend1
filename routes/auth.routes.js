import { Router } from "express";
import { register, login} from "../controllers/auth.controller.js"
const router = Router()

// Con esta ruta traemos todos los proyectos
// router.get('/proyects',getProyects);

// Con esta ruta creamos un proyectos
router.post('/auth/register',register);
router.post('/auth/login',login);

export default router;