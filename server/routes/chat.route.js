import {Router} from 'express'
import {getMessages,sendMessage} from "../controllers/chat.controller.js"

const router = Router()

router.get("/:reciverId", getMessages) //done
router.post("/:recieverId", sendMessage)    //done

export default router