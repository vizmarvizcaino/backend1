import { Proyect } from '../models/Proyect.js'
import { Task } from '../models/Task.js'

// Con esta funcion traemos todos los proyectos
export const getProyects = async (req, res) => {
  try {
    const proyects = await Proyect.findAll();
    res.json(proyects)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

// Con esta funcion traemos un proyecto
export const getProyect = async (req, res) => {
  try {
    const { id } = req.params
    const proyect = await Proyect.findByPk(id)
    if (!proyect)
      return res.status(404).json({ message: "poyect no existe" })
    res.json(proyect)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

// Con esta funcion creamos un proyectos
export const createProyect = async (req, res) => {
  try {
    const { name, priority, description } = req.body
    const newProyect = await Proyect.create({
      name,
      priority,
      description
    })
    res.json(newProyect)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

// Con esta funcion actualizamos un proyectos
export const updateProyect = async (req, res) => {
  try {
    const { id } = req.params
    const { name, priority, description } = req.body

    const proyect = await Proyect.findByPk(id)
    proyect.name = name
    proyect.priority = priority
    proyect.description = description
    await proyect.save()
    res.json(proyect)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

// Con esta funcion eliminamos un proyectos
export const deleteProyect = async (req, res) => {
  try {
    const { id } = req.params;
    await Proyect.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

// Con esta funcion nos mostrar todas las tareas que pertenecen a un proyecto debido a su relacion
export const getProyectTasks = async (req, res) => {
  const { id } = req.params
  const tasks = await Task.findAll({
    where: { proyect_id: id }
  });
  console.log(tasks)
  res.json(tasks)
}