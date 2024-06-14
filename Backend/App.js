import express from 'express';
import cookieParser from 'cookie-parser';
import getRouter from './Routes/Get.routes.js';
import sendRouter from'./Routes/Send.routes.js';
import cors from 'cors';

const app = express();
// accept json by express
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}));

app.use(express.json())
// make public assets to store files, folders, etc
app.use(express.static("public"));
// to access and set cookies on user server
app.use(cookieParser());

app.use('/api/send',getRouter)
app.use('/api/get', sendRouter)

export {app}