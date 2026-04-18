import cryto from "crypto";
import { raw } from "express";
import jwt from "jsonwebtoken";


const generattoken = (payload) => {
    const rawToken = cryto.createHash("sha256").update(rawToken).digest("hex");

    return{rawToken, hashedToken};

}