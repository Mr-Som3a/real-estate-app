import {Router} from 'express'
import {getPosts,createPost,editPost,deletePost} from "../controllers/post.controller.js"
import authority from '../middleware/authenticate.js'

const router = Router()

router.get("/",getPosts)  //done
router.post("/",authority,createPost)   //done
router.put("/",authority,editPost)  //done
router.delete("/",authority,deletePost) //done

export default router