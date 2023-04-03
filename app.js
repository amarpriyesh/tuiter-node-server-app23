import express from 'express'
import HelloController from './controller/hello-controller.js'
import UserController
    from "./controller/users/users-controller.js"
import TuitsController
    from "./controller/tuits/tuits-controller.js";
import cors from "cors";

const app = express()
app.use(cors())
app.use(express.json());
TuitsController(app);
HelloController(app)
UserController(app)
app.listen(4000)
