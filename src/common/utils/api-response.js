class ApiResponse {
    static ok(res, data, message = "Success", statusCode = 200) {
        return res.status(statusCode).json({
            success: true,
            message,
            data,
        });
    }
    static created(res, data, message = "Resource created successfully", statusCode = 201) {
        return res.status(statusCode).json({
            success: true,
            message,
            data,
        });
    }
    static nocontent(res, message = "No content", statusCode = 204) {
        return res.status(statusCode).json({
            success: true,
            message,
        });
    }
    static badRequest(res, message = "Bad request", statusCode = 400) {
        return res.status(statusCode).json({
            success: false,
            message,
        });
    }   

}

export default ApiResponse;