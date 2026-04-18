import Joi from "joi";
import BaseDto from "../../common/dto/base.dto.js";

class RegisterDto extends BaseDto{
    static schema = Joi.object({
        name: Joi.string().min(3).max(30).required(),
        email: Joi.string().email().required(),
        password: Joi.string().message("Password Must contain 8 chars mininum").min(6).required(),
        role: Joi.string().valid("user", "admin").default("user"),
        isverified: Joi.boolean().default(false),
    });
}

export default RegisterDto;