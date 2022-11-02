import jwt from "jsonwebtoken";
import { User } from "../models/User.js";
import bcrypt from 'bcryptjs';
import * as dotenv from 'dotenv';
dotenv.config()
//2 endpoint que permite el registro
export const register = async (req, res) => {
  try {
    if (!req.body.email || !req.body.password || !req.body.name) {
      return res.status(400).send({
        message: "email, password and name are required"
      });
    }


    if (req.body.email === '' || req.body.password === '' || req.body.name === '') {
      return res.status(400).send({
        message: "email, password and name are required"
      });
    }

    if (req.body.password.length < 6) {
      return res.status(400).send({
        message: "password must be at least 6 characters"
      });
    }

    if (!req.body.email.includes('@')) {
      return res.status(400).send({
        message: "email must contain @ character"
      });
    }
    const user = await User.create({
      name: req.body.name,
      lastName: req.body.lastName,
      email: req.body.email,
      ocupation: req.body.ocupation,
      address: req.body.address,
      task_id: req.body.task_id,
      password: bcrypt.hashSync(req.body.password, 8) 
    });
    res.status(201).json({
      "message": "User Created",
      "userId": user.id
    });
  } catch (err) {
    console.log(err);
  }
}

export const login = async (req, res) => { 
  try { 
    const user = await User.findOne({
      where: {
        email: req.body.email
      }
    })

    if (!user) {
      return res.status(404).send({
        message: `No user found with email ${req.body.email}`
      });
    }

    const passwordIsValid = bcrypt.compareSync(
      req.body.password, 
      user.password
    );
      
    if (!passwordIsValid) {
      return res.status(401)
        .send({
          message: "Invalid Password" 
        });
    }

    const token = jwt.sign({
      id: user.id,
      name: user.name,
    },'top-secret', { 
      expiresIn: 86400 
    });
    

    res.status(200)
      .send({
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
        },
        message: "Login successfull",
        accessToken: token,
      });
  } catch (err) {
    console.log(err);
  }
}