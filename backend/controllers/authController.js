import User from "../models/User.js";
import jwt from "jsonwebtoken"
import {JWT_SECRET} from "../config/Config.js"

export const  UserRegister=async(req,res)=>{
    try{

   const {username,email,password,role}=req.body
   
const isUserExist=await User.findOne({
    $or:[
        {email:email.toLowerCase()},
        {username:username.toLowerCase()},
      
    ]
})
if(isUserExist){
    return res.status(400).json({
        message:"user or email already exist"
        
    })
}
const createUser=new User({
    username:username,
    email:email,
    password:password,
    role: "user"
})
await createUser.save();
return res.status(201).send(createUser)

    }catch(e){
       console.log(`error occured at register user ${e}`)
       res.send("something wrong")
    }
}


export const UserLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // -----------------------------
    // 1. VALIDATE INPUT
    // -----------------------------
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    // -----------------------------
    // 2. FIND USER BY EMAIL
    // -----------------------------
    const user = await User.findOne({
      email: email.toLowerCase().trim(),
    }).select("+password");

    // ❌ USER NOT FOUND
    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    // -----------------------------
    // 3. CHECK PASSWORD
    // -----------------------------
    const isPasswordCorrect = await user.comparepassword(password);

    if (!isPasswordCorrect) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    // -----------------------------
    // 4. GENERATE TOKEN (JWT)
    // -----------------------------
    const expiresIn = 7 * 24 * 60 * 60; // 7 days

    const token = jwt.sign(
      {
        _id: user._id,
        role: user.role, // 🔥 IMPORTANT FOR RBAC
      },
      JWT_SECRET,
      { expiresIn }
    );

    // -----------------------------
    // 5. SET COOKIE (OPTIONAL BUT GOOD)
    // -----------------------------
    res.cookie("token", token, {
      httpOnly: true,   // 🔐 prevents JS access
      secure: false,    // true in production (HTTPS)
      sameSite: "lax",
      maxAge: expiresIn * 1000,
    });

    // -----------------------------
    // 6. REMOVE PASSWORD BEFORE SENDING RESPONSE
    // -----------------------------
    user.password = undefined;

    // -----------------------------
    // 7. SEND RESPONSE TO FRONTEND
    // -----------------------------
    return res.status(200).json({
      message: "Login successful",
      _id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
      token,
      expiresIn,
    });

  } catch (err) {
    console.log("LOGIN ERROR:", err);

    return res.status(500).json({
      message: "Server error, please try again",
    });
  }
};
