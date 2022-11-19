import { User } from '../models/User.js'

// Con esta funcion traemos todos los proyectos
export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

// Con esta funcion creamos un proyectos
export const createUser = async (req, res) => {
  try {
    let nombres = ''
    let apellidos = ''
    let telefono = ''
    let grado = ''
    let materia = ''
    let nota = ''
    let salon = ''
    console.log(req.body)
    const user = req.body.listUser
    user.map(user => {
      nombres = user.nombres
      apellidos = user.apellidos
      telefono = user.telefono
    })
    const academics = req.body.listAcademics
    academics.map(academic => {
      grado = academic.grado
      materia = academic.materia
      nota = academic.nota
      salon = academic.salon
    })
    const newUser = await User.create({
      nombres,
      apellidos,
      telefono,
      grado,
      materia,
      nota,
      salon
    })
    res.status(201).json({
      message: 'El usuario se ha creado correctamente en la base de datos'
    })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}





