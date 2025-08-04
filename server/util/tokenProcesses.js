import jwt from "jsonwebtoken";

export const genToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET_KEY);
};

export const verifyToken =(token)=>{
  return jwt.verify(token,process.env.JWT_SECRET_KEY)
}