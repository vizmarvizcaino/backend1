import express from 'express';
import cors from 'cors';
import usersRoute  from './routes/user.routes.js';

const app = express();

// Middlewares
app.use(express.json());

app.use(usersRoute);

app.use(cors({
    origin: "http://localhost:4000/",
    methods:["GET","POST"]
}));

export default app;