import express from 'express';
import proyectsRoute  from './routes/proyects.routes.js'
import taskRoute  from './routes/taks.routes.js'

const app = express();

// Middlewares
app.use(express.json())

app.use(proyectsRoute)
app.use(taskRoute)

export default app;