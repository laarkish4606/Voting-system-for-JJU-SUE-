import mongoose, { Types } from "mongoose";
import validator from "validator"
import bcrypt from "bcrypt"

const {Schema} =mongoose

const userSchema=new Schema({
    email:{
        type:String,
        lowercase:true,
        required:true,
        unique: true,
        validate:[validator.isEmail,"please insert valid email"]
    },
    username:{
        type:String,
       lowercase:true,
       required:true
    },
    password:{
        type:String,
        required:true,
       validate:[{
        validator:value=>validator.isStrongPassword(value),
        message:"possword must be conatin one or more alphanumeric symbols"
       }]
    },
     role: {
    type: String,
    enum: ["user", "admin"], 
    default: "user",
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,

},{
    timestamps:true
})

userSchema.pre("save",async function (next) {
    if(!this.isModified("password")){
        
    }
    const salt=await bcrypt.genSalt(10)
    this.password=await bcrypt.hash(this.password,salt) 
   
    
})
// password comparsion 
userSchema.methods.comparepassword=async function (givenPassword){
    return await bcrypt.compare(givenPassword,this.password)
}

const User=mongoose.model("User",userSchema)
export default User


