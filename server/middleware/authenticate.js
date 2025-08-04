import prisma from "../config/prisma.js"
import { verifyToken } from "../util/tokenProcesses.js"

const authority = async (req,res,next)=>{
   
    try {
        let token = req.cookies['auth-x']
        if(!token){
            return res.status(401).json({message:"Access Denaid"})
        }
        if(token.startsWith("Bearer ")){
            token = token.slice(7,token.length).trimLeft()
        }

        const decoded = verifyToken(token)

        if(!decoded){
            return res.status(403).json({message:"Token not valid"})
        }

        const user = await prisma.user.findUnique({
            where:{id:decoded.id},
            
        })
        delete user.password
        req.user=user
        next()
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}



export default authority