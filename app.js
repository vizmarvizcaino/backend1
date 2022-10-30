import express from 'express';
import proyectsRoute  from './routes/proyects.routes.js'
import taskRoute  from './routes/taks.routes.js'
import authRoute from './routes/auth.routes.js'

const app = express();

// Middlewares
app.use(express.json())

app.use(proyectsRoute)
app.use(taskRoute)
app.use(authRoute)


export default app;