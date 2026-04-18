import ApiError from "../../common/utils/api-error.js";
import  User from "../../models/user.model.js";


const register = async (req, res) => {
    // do user registration logic here, e.g. save user to database
   const existingUser = await User.findOne({email});
        if (existingUser) {
            throw ApiError.conflict("Email already exists");
        }
        
        const {rawToken, hashToken} = genrateRestToken();

       const user = await User.create({
            name,
            email,
            password,
            role,
            isverified,
            verificationToken: hashToken,
        });

        // to do send verification email with rawToken here

        const userobj = user.toObject();
        delete userobj.password;
        delete userobj.verificationToken;


    return userobj;
}

export {register};
