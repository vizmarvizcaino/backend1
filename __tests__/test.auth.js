import request from 'supertest';
import chai from 'chai';
import app from '../app.js';
import { User } from '../models/User.js';

const { expect } = chai;


describe('Test the auth endpoints', () => {

  it('should allow to create users', async () => {
    const payload = {
      "listUser":[
        {
          "id": "12345aeiou",
          "nombres": "vizmar",
          "apellidos": "vizcaino",
          "telefono": "3177047875"
        }
      ],
      "listAcademics":[
        {
          "grado": "2",
          "materia": "naturales",
          "nota": "10",
          "salon": "604"
        }
      ]
    };
    const { body, status } = await request(app).post('/user').send(payload);
    expect(status).to.equal(201);
    // check the userId
    expect(body).to.have.property('userId');
    const userId = body.userId;
    const user = await User.findByPk(userId);
    expect(user.nombres).to.equal(payload.listUser[0].nombres);
  });

  it('should return 400 if listuser is incomplete', async () => {
    const payload = {
      "listUser":[
        {
          "id": "12345aeiou",
          "nombres": "vizmar",
          "apellidos": "vizcaino"
        }
      ]
    };
    const { status } = await request(app).post('/user').send(payload);
    expect(status).to.equal(400);
  });

  it('should return 400 if password is shorter than 3 characters', async () => {
    const payload = {
      "listUser":[
        {
          "id": "12345aeiou",
          "nombres": "vi",
          "apellidos": "vizcaino",
          "telefono": "3177047875"
        }
      ],
      "listAcademics":[
        {
          "grado": "2",
          "materia": "naturales",
          "nota": "10",
          "salon": "604"
        }
      ]
    };
    const { body, status } = await request(app).post('/user').send(payload);
    expect(status).to.equal(400);
    expect(body.message).contains('the name, last name, and telephone must have at least 3 characters');
  });

 
});