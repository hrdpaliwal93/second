import type { Request, Response , NextFunction } from "express";
import JWT, {  type JwtPayload } from 'jsonwebtoken'


export function AuthMiddleware(req:Request,res:Response,next:NextFunction){
  let token  = req.headers.authorization?.split(" ")[1] 
  if(token){
    try{
       const decodeddata = JWT.verify(token, `${process.env.jwt_secret}`) as JwtPayload
      if(decodeddata){
          req.id = decodeddata.id 
            next();
          }else{
          res.json({message:"you are not logged in!"})
            }
    }catch(e){
      console.error(e)
    }
   

  }else{
    res.json({message:"token not provided !"})
  }
  

}