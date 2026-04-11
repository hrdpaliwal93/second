import  mongoose, { Schema , Types, model } from 'mongoose'
 mongoose.connect(`${process.env.database_url}`)





const userSchema = new Schema({
    username:{type:String, required:true, unique:true},
    password:{type:String, required:true}


})

const contentTypes = ["article", "image", "audio", "video"]
const contentSchema = new Schema({
    
    title:{type:String, required:true},
    type:{type:String, enum:contentTypes, required:true},
    link: {type:String, required:true},
    tags: [{type:Schema.Types.ObjectId, ref:'Tags', required:true}],
    userId: {type:Schema.Types.ObjectId, ref:'Users'}
})

const tagSchema = new Schema({
    title:{type:String, required:true}
})

const linkSchema = new Schema({
    hash:{type:String, required:true},
    userId:{type:Types.ObjectId, required:true , ref:'users'}
    
})

export const userModel = model('users', userSchema)
export const contentModel = model('content', contentSchema)
export const tagModel = model('Tags', tagSchema)
export const linkModel = model('Links', linkSchema)
 