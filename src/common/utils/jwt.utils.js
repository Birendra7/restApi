import cryto from "crypto";
import { raw } from "express";
import jwt from "jsonwebtoken";

const genrateaccessToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_ACCESS_EXPIRES_IN || "1h" });
}

const verifyAccessToken = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET);   }
    catch (error) {
        return null;
    }
}

const refreshToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_REFRESH_SECRET, { expiresIn: process.env.JWT_REFRESH_EXPIRES_IN || "7d" });
}

verifyRefreshToken = (token) => {
        return jwt.verify(token, process.env.JWT_REFRESH_SECRET);  
    };



const generateResetToken = (payload) => {
    const rawToken = cryto.createHash("sha256").update(rawToken).digest("hex");

    return{rawToken, hashedToken};

}


export {genrateaccessToken, verifyAccessToken, refreshToken, verifyRefreshToken, generateResetToken };


