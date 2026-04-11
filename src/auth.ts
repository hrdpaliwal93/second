
import JWT from 'jsonwebtoken'

export function AuthMiddleware(req,res,next){
    const token  = req.headers.token
    if(token){
        const decoded = JWT.verify(token,`${process.env.jwt_secret}`)
        if(decoded){
            req.header.id= decoded.id;
            next()
        }

    }else{
        res.json({
            message:"token required",
            success:false
        })
    }

}