import {Router} from 'express'
import {getPosts,createPost,editPost,deletePost} from "../controllers/post.controller.js"
import authority from '../middleware/authenticate.js'

const router = Router()

router.get("/",getPosts)  //done
router.post("/",createPost)   //done
router.put("/:id",editPost)  //done
router.delete("/:id",deletePost) //done

export default router