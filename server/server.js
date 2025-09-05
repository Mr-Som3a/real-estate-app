import express from "express"
import dotenv from "dotenv"
import helmet from "helmet"
import cors from "cors"
import http from 'http'
import cookieParser from "cookie-parser"

import authority from "./middleware/authenticate.js"

import authRouter from "./routes/auth.route.js"
import Shutdown from "./config/db.config.js"
import userRouter from "./routes/user.route.js"
import chatRouter from "./routes/chat.route.js"
import postRouter from "./routes/post.route.js"

import { v2 as cloudinary } from 'cloudinary';
import fileUpload from "express-fileupload"




//  CONFIGURATION
dotenv.config()
const app = express()
const PORT = process.env.PORT || 3001
const server = http.createServer(app)

//  MIDDLEWARE 

app.use(express.json());
app.use(cookieParser())
app.use(cors({
    origin:['http://localhost:5173','http://localhost:4001'],
    credentials:true,
}))
app.use(helmet())

cloudinary.config({
    cloud_name:"dhfxxxum7",
    secure: true,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_SECRET_KEY,
})

app.use(fileUpload({
  useTempFiles: true,          // Enable temp file storage
  tempFileDir: "/tmp/",        // Directory where files will be temporarily stored
//   limits: { fileSize: 5 * 1024 * 1024 }, // 5MB max file size (optional)
}));

//  Routes
app.use("/api/auth",authRouter)
app.use("/api/users",authority,userRouter)
app.use("/api/chat",authority, chatRouter)
app.use("/api/posts", postRouter) 

//  Error Handler
// app.use(errorHandler)

//  SERVER + DB CONNETION

server.listen(PORT,()=>{
    console.log('server connected on port : '+ PORT)
    
})

process.on('SIGINT', Shutdown);   // Ctrl+C
process.on('SIGTERM', Shutdown);  // Termination signal (e.g. in Docker)
