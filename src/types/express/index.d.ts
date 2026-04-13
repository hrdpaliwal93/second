// import 'express'

// declare module "express" {
//   interface Request {
//     id?:string// add custom field to Express Request
//   }
// }
// export {}
import { Request } from "express";
declare global{
    namespace Express{
        interface Request{
            id?:string
        }
    }
}
