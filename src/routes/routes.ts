import { Router } from "express";
import userRouter from '../controllers/userControllers'

const routers = Router()

routers.get('/profile', userRouter)
routers.post('/cadastrar', userRouter)
routers.post('/login', userRouter)
routers.delete('/delete', userRouter)

export default routers