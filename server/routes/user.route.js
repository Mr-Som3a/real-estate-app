import { Router } from "express";
import { getUsers ,getUser ,editProfile } from "../controllers/user.controller.js";
import authority from "../middleware/authenticate.js";
const router = Router();

router.get("/", authority, getUsers); // done
router.get("/:userId", getUser)   //done
router.put("/profile/:id", editProfile)   // as security: in case you know another user Id, can you change his info?

export default router;
