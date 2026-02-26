export const errorHandler = (err, _req, res, _next) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        success: false,
        statusCode,
        message: err.message || "Internal Server Error",
        errors: err.details || null,
        meta: {
            timestamp: new Date().toISOString(),
        },
    });
};
