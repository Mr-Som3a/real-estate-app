import {Router} from 'express'
import {CheckAuth, Signup,Login, Logout} from "../controllers/auth.controller.js"
import authority from '../middleware/authenticate.js'
const router = Router()

router.get("/check",authority,CheckAuth)    // tick
router.post("/signup",Signup)   // tick
router.post("/login",Login)     // tick
router.post("/logout",Logout)   // todo

export default router