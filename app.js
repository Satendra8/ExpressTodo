import express from "express";
import UserRouter from "./routes/user.js";
import TaskRouter from "./routes/task.js";
import {config} from "dotenv";
import cookieParser from "cookie-parser";
import { errMiddleware } from "./middlewares/error.js";
import cors from "cors"


export const app = express();

config({
    path: './data/config.env'
});

/** Using Middleware */
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    credentials: true // send cookie and headers to FE
}));


// Using Routes use this after all middlewares
app.use('/api/v1/user', UserRouter);
app.use('/api/v1/task', TaskRouter);


app.get('/', (req, res)=>{
    res.send("Home Page");
});

// error Handler Middleware
app.use(errMiddleware);
