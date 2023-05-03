import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
   name: {
    type:String,
    unique:true,
   },
   email:{
    type:String,
    unique:true,
   },
   password:{
    type:String,
   },
})

export default mongoose.model('user', userSchema);