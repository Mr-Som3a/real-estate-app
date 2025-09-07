import { Router } from "express";
import { getAgents ,getAgent ,editProfile } from "../controllers/agent.controller.js";

const router = Router();

router.get("/", getAgents); // done
router.get("/:agenId", getAgent)   //done
router.put("/profile/:id", editProfile)   // as security: in case you know another user Id, can you change his info?

export default router;
