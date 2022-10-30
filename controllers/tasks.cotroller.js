import { Task } from '../models/Task.js'

// Con esta funcion traemos todas las tareas
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

// Con esta funcion traemos una tarea
export const getTask = async (req, res) => {
  try {
    const { id } = req.params
    const task = await Task.findByPk(id)
    if (!task)
      return res.status(404).json({ message: "task no existe" })
    res.json(task)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

// Con esta funcion creamos las tareas
export const createTask = async (req, res) => {
  try {
    const { name, done, proyect_id } = req.body
    console.log(req.body)
    const newTask = await Task.create({
      name,
      done,
      proyect_id
    })
    res.json(newTask)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

// Con esta funcion actualizamos una tarea
export const updateTask = async (req, res) => {
  try {
    const { id } = req.params
    const { name, done, proyect_id } = req.body
    console.log(req.body)
    const task = await Task.findByPk(id)
    task.name = name
    task.done = done
    task.proyect_id = proyect_id
    await task.save()
    res.json(task)

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

// Con esta funcion eliminamos una tarea
export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await Task.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}