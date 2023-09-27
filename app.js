import Express from "express";
import router from './routers/router.js'
import ErrorHandl from "./middleware/error.js";
import cors from 'cors'
const app=Express()

app.use(Express.json())
app.use(cors())
app.use(router)

app.use(ErrorHandl)

export default app
