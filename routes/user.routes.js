import { Router } from "express";
import { createUser, getUsers } from "../controllers/user.controller.js";

const router = Router();

// Con esta ruta traemos todos los proyectos
router.get('/users',getUsers);

// Con esta ruta creamos un proyectos
router.post('/user',createUser);

export default router;