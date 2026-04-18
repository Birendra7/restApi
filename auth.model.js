import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true, 
        minlenght: 3,
        maxlenght: 50,},
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,},
    password: {
        type: String,
        required: [true, "password is reguired"],
        select: false, },// to exclude password from query results by default 
    
    role : {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    },

    isverified: {
        type: Boolean,
        default: false,
        select : false,
    },
});

export default mongoose.model("User", userSchema);