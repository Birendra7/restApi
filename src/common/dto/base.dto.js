import Joi from "joi";

class BaseDto{
    static schema = Joi.object({});
    static validate(data){
        const {error, value} = this.schema.validate(data,{
            abortEarly: false, // return all errors
            //allowUnknown: true, // allow unknown keys that are not defined in the schema
            stripUnknown: true, // remove unknown keys from the validated data
        });

        if(error){
            const errorMessage = error.details.map((d) => d.message)
            return {error, value: null};
        }
        return {error: null, value};
    }
}