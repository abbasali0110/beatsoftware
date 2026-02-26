export const sendResponse = ({ res, statusCode = 200, message = "Success", data, meta, }) => {
    return res.status(statusCode).json({
        success: true,
        statusCode,
        message,
        data,
        meta: {
            timestamp: new Date().toISOString(),
            ...meta,
        },
    });
};
