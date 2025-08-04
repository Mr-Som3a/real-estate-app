import {Router} from 'express'
import {getPosts,createPost,editPost,deletePost} from "../controllers/post.controller.js"

const router = Router()

router.get("/",getPosts)  //done
router.post("/",createPost)   //done
router.put("/",editPost)  //done
router.delete("/",deletePost) //done

export default router