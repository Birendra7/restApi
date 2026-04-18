import * as authService from "./auth.service.js";
import ApiResponse from "../../common/utils/apiResponse.js";


const register = async (req, res) => {
    // TODO: Implement registration logic
   const user = await authService.register(req.body);
   ApiResponse.created(res, "User registered successfully", user);

}

export { register };
