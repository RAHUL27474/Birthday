import mongoose , {Schema} from "mongoose";

const UserSchema = new Schema({
    userName:{
        type: String,
        required: true
    },
    inputDate:{
        type:Number,
        required: true,
    },
    inputMonth:{
        type:Number,
        required:true
    },
    pass:{
        type:String,
        required: true
    }
})

export const User = mongoose.model("User",UserSchema)