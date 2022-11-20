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
    if (!req.body.listUser || !req.body.listUser || !req.body.listUser) {
      return res.status(400).send({
        message: "nombres, apellidos y telefono son requeridos"
      });
    }
    let id = ""
    let nombres = ''
    let apellidos = ''
    let telefono = ''
    let grado = ''
    let materia = ''
    let nota = ''
    let salon = ''
    
    const user = req.body.listUser
    
    user.map(user => {
      id = user.id
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
      id,
      nombres,
      apellidos,
      telefono,
      grado,
      materia,
      nota,
      salon
    })
    res.status(201).json({
      "message": 'El usuario se ha creado correctamente en la base de datos',
      "userId": newUser.id   
    })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}





