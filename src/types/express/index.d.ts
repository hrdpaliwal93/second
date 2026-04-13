import "express";

declare module "express" {
  interface Request {
    id?:string// add custom field to Express Request
  }
}