import { Router } from "express";
import * as authController from "./auth.controller.js";
import registerDto from "./dto/register.dto.js";
import validate from "../../common/middleware/validate.middleware.js";


const router = Router();

router.post("/register", validate(registerDto), authController.register);