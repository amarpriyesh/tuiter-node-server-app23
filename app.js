import express from 'express'
import HelloController from './controller/hello-controller.js'
import UserController
    from "./controller/users/users-controller.js"
import TuitsController
    from "./controller/tuits/tuits-controller.js";
import cors from "cors";
import mongoose from "mongoose";

import dotenv from "dotenv"

dotenv.config()
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
                          || 'mongodb://127.0.0.1:27017/tuiter'

console.log(CONNECTION_STRING)
mongoose.connect(CONNECTION_STRING);

const app = express()
app.use(cors())
app.use(express.json());
TuitsController(app);
HelloController(app)
UserController(app)
app.listen(4000)
